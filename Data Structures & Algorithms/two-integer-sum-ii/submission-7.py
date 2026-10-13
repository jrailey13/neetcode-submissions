class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        complementMap = {}

        for i, num in enumerate(numbers, start=1):
            complement = target - num

            if num in complementMap:
                idx = complementMap.get(num)
                return [idx, i]
            
            complementMap[complement] = i