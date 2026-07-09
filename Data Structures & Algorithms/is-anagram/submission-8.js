class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const countMap = new Map()

        for (let i = 0; i < s.length; i++) {
            if (countMap.get(s[i])) countMap.set(s[i], countMap.get(s[i]) + 1);
            else countMap.set(s[i], 1)

            if (countMap.get(t[i])) countMap.set(t[i], countMap.get(t[i]) - 1);
            else countMap.set(t[i], -1)
        }

        return countMap.values().every(v => v === 0);
    }
}
