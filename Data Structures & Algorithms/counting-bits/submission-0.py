class Solution:
    def countBits(self, n: int) -> List[int]:
        result_list = []
        offset = 1

        for i in range(n+1):
            if i == 0:
                result_list.append(0)
                continue

            if offset * 2 == i:
                offset = i

            result_list.append(1 + result_list[i - offset])

        return result_list
            
        