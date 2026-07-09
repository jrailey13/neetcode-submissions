class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        if (nums.length < 2) return false;

        const map = new Map();

        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i]
            if (map.has(complement)) return [map.get(complement), i];

            map.set(nums[i], i)
        }
    }
}
