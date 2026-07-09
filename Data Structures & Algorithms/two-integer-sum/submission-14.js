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

            console.log(valueMap.values().toArray())
            if (valueMap.has(nums[i])) return [valueMap.get(nums[i]), i];

            valueMap.set(complement, i);
        }
    }
}