class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let valueArray = [];

        for (let i = 0; i < nums.length; i++) {
            let complement = target - nums[i];

            if (valueArray.includes(nums[i])) return [valueArray.indexOf(nums[i]), i];

            valueArray[i] = complement;
        }

        return valueArray;
    }
}
