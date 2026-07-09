class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();

        for (let i = 0; i < nums.length; i++) {
            map.set(i, (target - nums[i]));
            if (nums.includes(map.get(i))) {
                if (i === nums.indexOf(map.get(i))) continue
                return [i, nums.indexOf(map.get(i))]
            } 
        }
    }
}
