class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        resultMap = {}

        for string in strs:
            charList = [0] * 26
            for i in range(len(string)):
                charVal = ord(string[i]) - ord('a')

                charList[charVal] += 1

            if tuple(charList) in resultMap:
                resultMap[tuple(charList)].append(string)
            else:
                resultMap[tuple(charList)] = [string]

        return list(resultMap.values())