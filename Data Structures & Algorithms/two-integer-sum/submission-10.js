class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numMap = new Map();
        const solutionArray = [];

        for (let i = 0; i < nums.length; i++) {
            if (numMap.has(nums[i])) {
                return [numMap.get(nums[i]), i]
            }
            
            const complement = target - nums[i];
            numMap.set(complement, i);
        }

        return []
    }
}
