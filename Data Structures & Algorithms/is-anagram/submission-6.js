class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const countMap = new Map();

        for (let i = 0; i < s.length; i++) {
            countMap.set(s[i], (countMap.get(s[i]) || 0) + 1);
            countMap.set(t[i], (countMap.get(t[i]) || 0) - 1);
        }

        const allZeros = Array.from(countMap.values()).every(v => v === 0);
        return allZeros;
    }
}
