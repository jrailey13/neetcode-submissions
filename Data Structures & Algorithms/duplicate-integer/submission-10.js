class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if (nums.length < 2) return false;

        const set = new Set(nums);

        if (set.size !== nums.length) return true;
        else return false;
    }
}
