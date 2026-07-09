class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = {};

        for (let s of strs) {
            let count = new Array(26).fill(0)

            for (let i = 0; i < s.length; i++) {
                let index = s.charCodeAt(i) - "a".charCodeAt(0);

                count[index] += 1
            }
            if (typeof result[count] === "object") result[count].push(s);
            else result[count] = [s]
        }

        return Object.values(result)
    }
}
