class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr = "";
        for (let str of strs) {
            encodedStr += str.length + "#";
            encodedStr += str;
        }

        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let solutionArr = [];
        let i = 0;

        while (i < str.length) {
            let j = i;
            let numStr = "";
            while (str[j] !== "#" && j < str.length) {
                numStr += str[j];
                j++;
            }

            let numVal = parseInt(numStr, 10);

            let decodedStr = str.slice(j + 1, j + 1 + numVal);
            
            solutionArr.push(decodedStr);

            i = j + 1 + numVal;
        }

        return solutionArr;
    }
}
