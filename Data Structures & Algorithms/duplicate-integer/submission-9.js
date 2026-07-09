class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if (nums.length < 2) return false;

        const set = new Set(nums);

        return set.size !== nums.length     
    }
}
