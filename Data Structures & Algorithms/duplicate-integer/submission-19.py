class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        resultSet = set(nums)

        return len(resultSet) != len(nums)
        