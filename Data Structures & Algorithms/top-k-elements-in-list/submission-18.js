class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqMap = new Map();
        let freqArray = Array.from({length: nums.length + 1}, () => []);

        for (let i = 0; i < nums.length; i++) {
            if (freqMap.has(nums[i])) freqMap.set(nums[i], freqMap.get(nums[i]) + 1);
            else freqMap.set(nums[i], 1);
        }

        for (let [k,v] of freqMap) {
            freqArray[v].push(k);
        }

        let resultArray = [];
        for (let j = freqArray.length - 1; j >= 0; j--) {
            if (resultArray.length === k) {
                return resultArray;
            }
            while (freqArray[j].length > 0) {
                let val = freqArray[j].pop()
                resultArray.push(val);
            }
        }
    }
}
