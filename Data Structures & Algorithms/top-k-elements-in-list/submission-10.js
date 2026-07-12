class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        const freq = Array.from({length: nums.length + 1}, () => []);

        for (let i = 0; i < nums.length; i++) {
            if (map.has(nums[i])) map.set(nums[i], (map.get(nums[i]) + 1));
            else map.set(nums[i], 1);
        }

        for (let [k,v] of map) {
            freq[v].push(k);
        }

        console.log(freq)
        let solutionArr = [];
        for (let j = nums.length; j >= 0; j--) {
            if (solutionArr.length === k) {
                return solutionArr;
            }
            while (freq[j].length > 0) {
                let val = freq[j].pop();
                solutionArr.push(val)
            }
        }

        return solutionArr;
    }
}
