class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = new Map();
        const freq = Array.from({ length: nums.length + 1 }, () => []);
        
        for (let num of nums) {
            count.set(num, 1 + (count.get(num) || 0));
        }
        for (const [k, v] of count.entries()) {
            freq[v].push(k);
        }

        const result = [];
        for (let i = freq.length - 1; i >= 0; i--) {
            if (freq[i].length > 0) {
                result.push(...freq[i]);
                if (result.length >= k) {
                    return result.slice(0, k)
                }
            }
        }

        return result;
    }
}
