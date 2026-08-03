class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = 1;
        let postfix = 1;
        const output = new Array(nums.length);

        for (let i = 0; i < nums.length; i++) {
            output[i] = prefix;

            prefix *= nums[i];
        }

        for (let j = nums.length - 1; j >= 0; j--) {
            output[j] *= postfix;

            postfix *= nums[j]
        }

        return output
    }
}