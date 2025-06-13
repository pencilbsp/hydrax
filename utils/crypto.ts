import { VideoObject } from "./video";

export class CryptoHelper {
    private textEncoder: TextEncoder;
    private key: CryptoKey | null = null;
    private algorithm: any = { name: "AES-CTR", length: 128 };

    constructor() {
        this.textEncoder = new TextEncoder();
    }

    public static decryptString(encryptedString: string, decryptionKey: string): VideoObject {
        let sanitizedInput = encryptedString.replace(/[^A-Za-z0-9+/=]/g, "");
        let decodedString = "";
        let index = 0;

        while (index < sanitizedInput.length) {
            const firstCharValue =
                (decryptionKey.indexOf(sanitizedInput[index++]) << 2) |
                (decryptionKey.indexOf(sanitizedInput[index]) >> 4);
            const secondCharValue = decryptionKey.indexOf(sanitizedInput[index++]);
            const thirdCharValue = ((0xf & secondCharValue) << 4) | (decryptionKey.indexOf(sanitizedInput[index]) >> 2);
            const fourthCharCode = decryptionKey.indexOf(sanitizedInput[index++]);
            const fifthCharCode = ((0x3 & fourthCharCode) << 6) | decryptionKey.indexOf(sanitizedInput[index++]);

            decodedString += String.fromCharCode(firstCharValue);
            if (fourthCharCode !== 0x40) decodedString += String.fromCharCode(thirdCharValue);
            if (fifthCharCode !== 0x40) decodedString += String.fromCharCode(fifthCharCode);
        }

        return JSON.parse(decodeURIComponent(escape(decodedString)));
    }

    public static encryptString(plainObject: VideoObject, encryptionKey: string): string {
        // Chuyển đối tượng thành chuỗi JSON
        const jsonString = JSON.stringify(plainObject);
        // Áp dụng encodeURIComponent và unescape để tương thích với decryptString
        const encodedString = unescape(encodeURIComponent(jsonString));
        
        let encryptedString = "";
        const base64Chars = encryptionKey;
        
        // Mã hóa từng bộ ba ký tự
        for (let i = 0; i < encodedString.length; i += 3) {
            const firstCharCode = encodedString.charCodeAt(i);
            const secondCharCode = i + 1 < encodedString.length ? encodedString.charCodeAt(i + 1) : 0x40;
            const thirdCharCode = i + 2 < encodedString.length ? encodedString.charCodeAt(i + 2) : 0x40;

            // Tính toán các giá trị mã hóa
            const firstOutput = (firstCharCode >> 2) & 0x3f;
            const secondOutput = ((firstCharCode & 0x3) << 4) | ((secondCharCode >> 4) & 0xf);
            const thirdOutput = secondCharCode !== 0x40 ? ((secondCharCode & 0xf) << 2) | ((thirdCharCode >> 6) & 0x3) : 0x40;
            const fourthOutput = thirdCharCode !== 0x40 ? thirdCharCode & 0x3f : 0x40;

            // Ánh xạ các giá trị sang ký tự trong encryptionKey
            encryptedString += base64Chars[firstOutput];
            encryptedString += base64Chars[secondOutput];
            if (thirdOutput !== 0x40) encryptedString += base64Chars[thirdOutput];
            if (fourthOutput !== 0x40) encryptedString += base64Chars[fourthOutput];
        }

        // Thêm padding bằng '=' nếu cần để đảm bảo độ dài chuỗi là bội số của 4
        while (encryptedString.length % 4 !== 0) {
            encryptedString += '=';
        }

        return encryptedString;
    }

    async expandKey(keyHex: string) {
        const keyBytes = this.textEncoder.encode(keyHex);
        this.algorithm.counter = new Uint8Array(keyBytes.slice(0, 16));

        try {
            this.key = await crypto.subtle.importKey("raw", keyBytes, this.algorithm, false, ["encrypt", "decrypt"]);
            return true;
        } catch (error) {
            return false;
        }
    }

    async encrypt(data: string | Uint8Array) {
        if (!this.key) {
            throw new Error("Key not initialized");
        }

        function arrayBufferToHex(buffer: ArrayBuffer) {
            const byteArray = new Uint8Array(buffer);
            return Array.from(byteArray)
                .map((byte) => byte.toString(16).padStart(2, "0")) // Chuyển mỗi byte thành hex, thêm '0' nếu cần
                .join(""); // Ghép thành chuỗi
        }

        const dataBytes = typeof data === "string" ? this.textEncoder.encode(data) : data;
        const encrypted = await crypto.subtle.encrypt(this.algorithm, this.key, dataBytes);
        return Array.from(new Uint8Array(encrypted))
            .map((b) => String.fromCharCode(b))
            .join("");
    }

    async decrypt(data: string | Uint8Array) {
        if (!this.key) {
            throw new Error("Key not initialized");
        }

        if (typeof data === "string") {
            return (async function (data: string) {
                const dataBytes = atob(data);
                const uint8Array = new Uint8Array(
                    (dataBytes.match(/[\s\S]/g) || []).map((char: string) => char.charCodeAt(0))
                );
                const decrypted = await crypto.subtle.decrypt(this.algorithm, this.key, uint8Array);
                return new TextDecoder().decode(decrypted);
            })(data);
        }

        const decrypted = await crypto.subtle.decrypt(this.algorithm, this.key, data);
        return new Uint8Array(decrypted);
    }
}

export function hexToString(str: string) {
    const buf = Buffer.from(str, "hex");
    return buf.toString("utf8");
}
