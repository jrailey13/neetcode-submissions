class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if (nums.legth < 2) return false;

        const set = new Set(nums);

        return set.size !== nums.length
    }
}
