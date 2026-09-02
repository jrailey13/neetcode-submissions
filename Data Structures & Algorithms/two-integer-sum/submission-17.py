class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:        
        resultMap = {}

        for i in range(len(nums)):
            complement = target - nums[i]

            if nums[i] in resultMap:
                return [resultMap.get(nums[i]), i]

            resultMap[complement] = i

