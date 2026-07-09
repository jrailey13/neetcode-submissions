class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const solutionMap = {};

        for (let s of strs) {
            let wordArray = new Array(26).fill(0);

            for (let i = 0; i < s.length; i++) {
                let index = s.charCodeAt(i) - "a".charCodeAt(0);

                wordArray[index] += 1;
            }
            
            if (typeof solutionMap[wordArray] === "object") solutionMap[wordArray].push(s);
            else solutionMap[wordArray] = [s]
        }

        return Object.values(solutionMap)
    }
}
