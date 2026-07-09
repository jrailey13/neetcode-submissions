class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr = "";

        for (let str of strs) {
            encodedStr += str.length.toString() + "#";
            encodedStr += str;
        }

        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0;
        let decodedArr = [];

        while (i < str.length) {
            let j = i;
            while (str[j] !== "#") {
                j++;
            }
            let length = parseInt(str.slice(i, j), 10);

            i = j + 1;

            decodedArr.push(str.slice(i, i + length));

            i += length;
        }

        return decodedArr;
    }
}
