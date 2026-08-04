class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let result = new Map();

        for (let str of strs) {
            let strArray = new Array(26).fill(0);
            for (let char of str) {
                let charValue = char.charCodeAt(0) - "a".charCodeAt(0);
                strArray[charValue] += 1;
            }
            
            let key = strArray.toString();
            if (typeof result.get(key) === "object") result.get(key).push(str)
            else result.set(key, [str]);
        }

        return Array.from(result.values());
    }
}
