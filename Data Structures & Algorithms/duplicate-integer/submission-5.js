class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if (nums.length === 0) return false;

        for (let slow = 0; slow < nums.length; slow++) {
            let fast = slow + 1;
            for (fast; fast < nums.length; fast++) {
                if (nums[fast] === nums[slow]) {
                    return true
                }
            }
        }
        return false;
    }
}
