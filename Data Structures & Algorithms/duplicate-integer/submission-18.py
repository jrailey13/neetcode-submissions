class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        resultSet = set(nums);

        if len(resultSet) != len(nums):
            return True
        else:
            return False
        