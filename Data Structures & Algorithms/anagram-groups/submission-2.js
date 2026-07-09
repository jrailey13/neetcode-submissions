class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let resultMap = new Map();

        for (let str of strs) {
            let charArray = new Array(26).fill(0);

            for (let char of str) {
                let charValue = char.charCodeAt(0) - "a".charCodeAt(0);

                charArray[charValue] += 1;
            }

            let key = charArray.join(",");

            if (resultMap.has(key)) resultMap.get(key).push(str);
            else resultMap.set(key, Array(str));
        }

        return resultMap.values().toArray();
    }
}
