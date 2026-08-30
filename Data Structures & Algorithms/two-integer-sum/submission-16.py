class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        resultMap = dict()

        for i in range(len(nums)):
            if nums[i] in resultMap:
                return [resultMap.get(nums[i]), i]
            
            complement = target - nums[i]

            resultMap[complement] = i
        