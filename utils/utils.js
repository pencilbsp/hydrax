if (typeof Uint8Array === "undefined") {
    function Uint8Array(length) {
        var arr = new Array(length);
        for (var i = 0; i < length; i++) {
            arr[i] = 0; // Initialize all elements to zero
        }
        arr.buffer = arr; // Mimic the buffer property
        return arr;
    }
}

export function generateKey(videoID) {
    if (null == videoID) throw new Error("Illegal argument " + videoID);
    const wordsBytes = wordsToBytes(encoder(videoID));
    return bytesToHex(wordsBytes);
}

// return _0xa03e36 && _0xa03e36['asBytes'] ? _0x92db4f : _0xa03e36 && _0xa03e36['asString'] ? _0x50e197[_0x212677(0xbe0) + _0x212677(0xa54)](_0x92db4f) : _0xca295b[_0x212677(0xa1f)](_0x92db4f);

function wordsToBytes(words) {
    var byteArray = [];
    var index = 0;
    for (; index < 32 * words.length; index += 8) {
        byteArray.push((words[index >>> 5] >>> (24 - (index % 32))) & 255);
    }
    return byteArray;
}

function bytesToHex(bytes) {
    var hexArray = [];
    var byteIndex = 0;
    for (; byteIndex < bytes.length; byteIndex++) {
        hexArray.push((bytes[byteIndex] >>> 4).toString(16));
        hexArray.push((15 & bytes[byteIndex]).toString(16));
    }
    return hexArray.join("");
}

function isBuffer(value) {
    return !!value.constructor && typeof value.isBuffer === "function" && value.isBuffer(value);
}

function encoder(input, _0xe496f4) {
    var index;

    input.constructor == String
        ? (input = _0xe496f4 && "binary" === _0xe496f4["encoding"] ? stringToBytes(input) : stringToBytes(input))
        : isBuffer(input)
        ? (input = Array.prototype.slice.call(input, 0x0))
        : Array.isArray(input) || input.constructor === Uint8Array || (input = input.toString());
    // if (input.constructor === String) {
    //     input = 'binary' ? stringToBytesBin(input) :stringToBytes(input)
    // }

    const words = bytesToWords(input);
    const bitLength = 8 * input.length; // Length in bits
    var hash1 = 0x67452301;
    var hash2 = -0x10325477;
    var hash3 = -0x67452302;
    var hash4 = 0x10325476;

    for (index = 0; index < words.length; index++) {
        words[index] =
            (0xff00ff & ((words[index] << 8) | (words[index] >>> 24))) |
            (0xff00ff00 & ((words[index] << 24) | (words[index] >>> 8)));
    }

    words[bitLength >>> 5] |= 128 << bitLength % 32;
    words[14 + (((bitLength + 64) >>> 9) << 4)] = bitLength;

    for (index = 0; index < words.length; index += 0x10) {
        const tempHash1 = hash1;
        const tempHash2 = hash2;
        const tempHash3 = hash3;
        const tempHash4 = hash4;

        hash1 = calculateHash(tempHash1, tempHash2, tempHash3, tempHash4, words[index], 0x7, -0x28955b88);
        hash4 = calculateHash(tempHash4, hash1, tempHash2, tempHash3, words[index + 0x1], 0xc, -0x173848aa);
        hash3 = calculateHash(tempHash3, hash4, hash1, tempHash2, words[index + 0x2], 0x11, 0x242070db);

        hash2 = calculateHash(hash2, hash3, hash4, hash1, words[index + 0x3], 0x16, -0x3e423112);
        hash1 = calculateHash(hash1, hash2, hash3, hash4, words[index + 0x4], 0x7, -0xa83f051);
        hash4 = calculateHash(hash4, hash1, hash2, hash3, words[index + 0x5], 0xc, 0x4787c62a);
        hash3 = calculateHash(hash3, hash4, hash1, hash2, words[index + 0x6], 0x11, -0x57cfb9ed);
        hash2 = calculateHash(hash2, hash3, hash4, hash1, words[index + 0x7], 0x16, -0x2b96aff);
        hash1 = calculateHash(hash1, hash2, hash3, hash4, words[index + 0x8], 0x7, 0x698098d8);
        hash4 = calculateHash(hash4, hash1, hash2, hash3, words[index + 0x9], 0xc, -0x74bb0851);
        hash3 = calculateHash(hash3, hash4, hash1, hash2, words[index + 0xa], 0x11, -0xa44f);
        hash2 = calculateHash(hash2, hash3, hash4, hash1, words[index + 0xb], 0x16, -0x76a32842);
        hash1 = calculateHash(hash1, hash2, hash3, hash4, words[index + 0xc], 0x7, 0x6b901122);
        hash4 = calculateHash(hash4, hash1, hash2, hash3, words[index + 0xd], 0xc, -0x2678e6d);
        hash3 = calculateHash(hash3, hash4, hash1, hash2, words[index + 0xe], 0x11, -0x5986bc72);
        hash1 = calculateHash2(
            hash1,
            (hash2 = calculateHash(hash2, hash3, hash4, hash1, words[index + 0xf], 0x16, 0x49b40821)),
            hash3,
            hash4,
            words[index + 0x1],
            0x5,
            -0x9e1da9e
        );
        hash4 = calculateHash2(hash4, hash1, hash2, hash3, words[index + 0x6], 0x9, -0x3fbf4cc0);
        hash3 = calculateHash2(hash3, hash4, hash1, hash2, words[index + 0xb], 0xe, 0x265e5a51);
        hash2 = calculateHash2(hash2, hash3, hash4, hash1, words[index], 0x14, -0x16493856);
        hash1 = calculateHash2(hash1, hash2, hash3, hash4, words[index + 0x5], 0x5, -0x29d0efa3);
        hash4 = calculateHash2(hash4, hash1, hash2, hash3, words[index + 0xa], 0x9, 0x2441453);
        hash3 = calculateHash2(hash3, hash4, hash1, hash2, words[index + 0xf], 0xe, -0x275e197f);
        hash2 = calculateHash2(hash2, hash3, hash4, hash1, words[index + 0x4], 0x14, -0x182c0438);
        hash1 = calculateHash2(hash1, hash2, hash3, hash4, words[index + 0x9], 0x5, 0x21e1cde6);
        hash4 = calculateHash2(hash4, hash1, hash2, hash3, words[index + 0xe], 0x9, -0x3cc8f82a);
        hash3 = calculateHash2(hash3, hash4, hash1, hash2, words[index + 0x3], 0xe, -0xb2af279);
        hash2 = calculateHash2(hash2, hash3, hash4, hash1, words[index + 0x8], 0x14, 0x455a14ed);
        hash1 = calculateHash2(hash1, hash2, hash3, hash4, words[index + 0xd], 0x5, -0x561c16fb);
        hash4 = calculateHash2(hash4, hash1, hash2, hash3, words[index + 0x2], 0x9, -0x3105c08);
        hash3 = calculateHash2(hash3, hash4, hash1, hash2, words[index + 0x7], 0xe, 0x676f02d9);
        hash1 = calculateHash3(
            hash1,
            (hash2 = calculateHash2(hash2, hash3, hash4, hash1, words[index + 0xc], 0x14, -0x72d5b376)),
            hash3,
            hash4,
            words[index + 0x5],
            0x4,
            -0x5c6be
        );
        hash4 = calculateHash3(hash4, hash1, hash2, hash3, words[index + 0x8], 0xb, -0x788e097f);
        hash3 = calculateHash3(hash3, hash4, hash1, hash2, words[index + 0xb], 0x10, 0x6d9d6122);
        hash2 = calculateHash3(hash2, hash3, hash4, hash1, words[index + 0xe], 0x17, -0x21ac7f4);
        hash1 = calculateHash3(hash1, hash2, hash3, hash4, words[index + 0x1], 0x4, -0x5b4115bc);
        hash4 = calculateHash3(hash4, hash1, hash2, hash3, words[index + 0x4], 0xb, 0x4bdecfa9);
        hash3 = calculateHash3(hash3, hash4, hash1, hash2, words[index + 0x7], 0x10, -0x944b4a0);
        hash2 = calculateHash3(hash2, hash3, hash4, hash1, words[index + 0xa], 0x17, -0x41404390);
        hash1 = calculateHash3(hash1, hash2, hash3, hash4, words[index + 0xd], 0x4, 0x289b7ec6);
        hash4 = calculateHash3(hash4, hash1, hash2, hash3, words[index], 0xb, -0x155ed806);
        hash3 = calculateHash3(hash3, hash4, hash1, hash2, words[index + 0x3], 0x10, -0x2b10cf7b);
        hash2 = calculateHash3(hash2, hash3, hash4, hash1, words[index + 0x6], 0x17, 0x4881d05);
        hash1 = calculateHash3(hash1, hash2, hash3, hash4, words[index + 0x9], 0x4, -0x262b2fc7);
        hash4 = calculateHash3(hash4, hash1, hash2, hash3, words[index + 0xc], 0xb, -0x1924661b);
        hash3 = calculateHash3(hash3, hash4, hash1, hash2, words[index + 0xf], 0x10, 0x1fa27cf8);
        hash1 = calculateHash4(
            hash1,
            (hash2 = calculateHash3(hash2, hash3, hash4, hash1, words[index + 0x2], 0x17, -0x3b53a99b)),
            hash3,
            hash4,
            words[index],
            0x6,
            -0xbd6ddbc
        );
        hash4 = calculateHash4(hash4, hash1, hash2, hash3, words[index + 0x7], 0xa, 0x432aff97);
        hash3 = calculateHash4(hash3, hash4, hash1, hash2, words[index + 0xe], 0xf, -0x546bdc59);
        hash2 = calculateHash4(hash2, hash3, hash4, hash1, words[index + 0x5], 0x15, -0x36c5fc7);
        hash1 = calculateHash4(hash1, hash2, hash3, hash4, words[index + 0xc], 0x6, 0x655b59c3);
        hash4 = calculateHash4(hash4, hash1, hash2, hash3, words[index + 0x3], 0xa, -0x70f3336e);
        hash3 = calculateHash4(hash3, hash4, hash1, hash2, words[index + 0xa], 0xf, -0x100b83);
        hash2 = calculateHash4(hash2, hash3, hash4, hash1, words[index + 0x1], 0x15, -0x7a7ba22f);
        hash1 = calculateHash4(hash1, hash2, hash3, hash4, words[index + 0x8], 0x6, 0x6fa87e4f);
        hash4 = calculateHash4(hash4, hash1, hash2, hash3, words[index + 0xf], 0xa, -0x1d31920);
        hash3 = calculateHash4(hash3, hash4, hash1, hash2, words[index + 0x6], 0xf, -0x5cfebcec);
        hash2 = calculateHash4(hash2, hash3, hash4, hash1, words[index + 0xd], 0x15, 0x4e0811a1);
        hash1 = calculateHash4(hash1, hash2, hash3, hash4, words[index + 0x4], 0x6, -0x8ac817e);
        hash4 = calculateHash4(hash4, hash1, hash2, hash3, words[index + 0xb], 0xa, -0x42c50dcb);
        hash3 = calculateHash4(hash3, hash4, hash1, hash2, words[index + 0x2], 0xf, 0x2ad7d2bb);
        hash2 = calculateHash4(hash2, hash3, hash4, hash1, words[index + 0x9], 0x15, -0x14792c6f);

        hash1 = (hash1 + tempHash1) >>> 0;
        hash2 = (hash2 + tempHash2) >>> 0;
        hash3 = (hash3 + tempHash3) >>> 0;
        hash4 = (hash4 + tempHash4) >>> 0;
    }

    return endian([hash1, hash2, hash3, hash4]);
}

function stringToBytes(string) {
    var byteArray = [];
    var charIndex = 0;
    for (; charIndex < string.length; charIndex++) {
        byteArray.push(255 & string.charCodeAt(charIndex));
    }
    return byteArray;
}

function rotateToLeft(value, shift) {
    return (value << shift) | (value >>> (32 - shift));
}

function endian(value) {
    if (typeof value === "number") {
        return (0xff00ff & rotateToLeft(value, 8)) | (0xff00ff00 & rotateToLeft(value, 24));
    }
    for (var i = 0; i < value.length; i++) {
        value[i] = endian(value[i]);
    }
    return value;
}

function bytesToWords(bytes) {
    var words = [];
    var byteIndex = 0;
    var bitIndex = 0;
    for (; byteIndex < bytes.length; byteIndex++, bitIndex += 8) {
        words[bitIndex >>> 5] |= bytes[byteIndex] << (24 - (bitIndex % 32));
    }
    return words;
}

function calculateHash(value1, value2, value3, value4, value5, shiftAmount, constant) {
    const tempValue = value1 + ((value2 & value3) | (~value2 & value4)) + (value5 >>> 0) + constant;
    return ((tempValue << shiftAmount) | (tempValue >>> (32 - shiftAmount))) + value2;
}

function calculateHash2(value1, value2, value3, value4, value5, shiftAmount, constant) {
    const tempValue = value1 + ((value2 & value4) | (value3 & ~value4)) + (value5 >>> 0) + constant;
    return ((tempValue << shiftAmount) | (tempValue >>> (32 - shiftAmount))) + value2;
}

function calculateHash3(value1, value2, value3, value4, value5, shiftAmount, constant) {
    const tempValue = value1 + (value2 ^ value3 ^ value4) + (value5 >>> 0) + constant;
    return ((tempValue << shiftAmount) | (tempValue >>> (32 - shiftAmount))) + value2;
}

function calculateHash4(value1, value2, value3, value4, value5, shiftAmount, constant) {
    const tempValue = value1 + (value3 ^ (value2 | ~value4)) + (value5 >>> 0) + constant;
    return ((tempValue << shiftAmount) | (tempValue >>> (32 - shiftAmount))) + value2;
}


