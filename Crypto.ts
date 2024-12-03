import { VideoObject } from "./Video";

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
            const firstCharValue = (decryptionKey.indexOf(sanitizedInput[index++]) << 2) | (decryptionKey.indexOf(sanitizedInput[index]) >> 4);
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
                const uint8Array = new Uint8Array((dataBytes.match(/[\s\S]/g) || []).map((char: string) => char.charCodeAt(0)));
                const decrypted = await crypto.subtle.decrypt(this.algorithm, this.key, uint8Array);
                return new TextDecoder().decode(decrypted);
            })(data);
        }

        const decrypted = await crypto.subtle.decrypt(this.algorithm, this.key, data);
        return new Uint8Array(decrypted);
    }
}
