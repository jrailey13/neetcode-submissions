class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        output = []
        intervals.sort(key=lambda x: x[0])

        for i in range(len(intervals)):
            cur = intervals[i]

            if len(output) == 0:
                output.append(cur)               
            elif output[-1][1] >= cur[0]:
                output[-1][1] = max(output[-1][1], cur[1])
            else:
                output.append(cur)

        return output
                