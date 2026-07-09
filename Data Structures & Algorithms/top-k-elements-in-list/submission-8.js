class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        const freq = Array.from({ length: nums.length + 1 }, () => []);

        for (let i = 0; i < nums.length; i++) {
            if (map.has(nums[i])) {
                map.set(nums[i], (map.get(nums[i]) || 0) + 1);
            } else {
                map.set(nums[i], 1);
            }
        }

        for (const [k,v] of map) {
            freq[v].push(k)
        }

        const result = [];
        for (let i = freq.length - 1; i >= 0; i--) {
            if (freq[i].length > 0) {
                result.push(...freq[i]);
                if (result.length >= k) return result.slice(0,k);
            }
        }
        return result;
    }
}
