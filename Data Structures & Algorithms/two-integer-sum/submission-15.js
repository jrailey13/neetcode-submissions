class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let valueMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            let complement = target - nums[i];

            if (valueMap.has(nums[i])) return [valueMap.get(nums[i]), i];

            valueMap.set(complement, i);
        }
    }
}