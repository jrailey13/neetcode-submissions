class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        idx1 = 0
        idx2 = len(numbers) - 1

        for i in range(len(numbers)):
            firstNum = numbers[idx1]
            lastNum = numbers[idx2]

            if firstNum + lastNum == target:
                return [idx1 + 1, idx2 + 1]
            elif firstNum + lastNum > target:
                idx2 -= 1
            else:
                idx1 += 1
        