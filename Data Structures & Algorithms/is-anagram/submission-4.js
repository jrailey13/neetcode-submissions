class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false

        const counts = new Map();

        for (let i = 0; i < s.length; i++) {
            if (counts.get(s[i])) counts.set(s[i], counts.get(s[i]) + 1);
            else counts.set(s[i], 1);
            if (counts.get(t[i])) counts.set(t[i], counts.get(t[i]) - 1);
            else counts.set(t[i], -1);
        }

        return Array.from(counts.values()).every(value => value === 0)
    }
}
