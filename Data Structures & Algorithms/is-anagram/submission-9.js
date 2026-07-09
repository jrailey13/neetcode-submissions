class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        let resultMap = new Map();

        for (let i = 0; i < s.length; i++) {
            if (resultMap.has(s[i])) resultMap.set(s[i], (resultMap.get(s[i]) + 1));
            else resultMap.set(s[i], 1);
            if (resultMap.has(t[i])) resultMap.set(t[i], (resultMap.get(t[i]) - 1));
            else resultMap.set(t[i], -1);
        }

        return resultMap.values().every(x => x === 0);
    }
}
