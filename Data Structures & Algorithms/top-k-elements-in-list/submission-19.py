class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freqMap = {}
        freqArray = [[] for i in range(len(nums) + 1)]
        resultArray = [];

        for i in range(len(nums)):
            if nums[i] in freqMap:
                freqMap[nums[i]] += 1
            else:
                freqMap[nums[i]] = 1
        
        for key in freqMap:
            freqArray[freqMap.get(key)].append(key)

        for i in range(len(nums), -1, -1):
            if len(resultArray) == k:
                return resultArray
            else:
                while len(freqArray[i]) > 0:
                    val = freqArray[i].pop()
                    resultArray.append(val)

            
        
        