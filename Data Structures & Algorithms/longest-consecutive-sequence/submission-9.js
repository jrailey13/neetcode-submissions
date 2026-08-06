class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;
        let numsSet = new Set(nums);
        let longest = 1;

        console.log(numsSet)
        for (let n of nums) {
            let length = 1
            if (!numsSet.has(n - 1)) {
                while (numsSet.has(n + length)) {
                    length += 1;
                }
            }
            longest = Math.max(longest, length);
        }

        return longest;
    }
}
