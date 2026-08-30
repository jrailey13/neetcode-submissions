class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if (len(s) != len(t)):
            return False

        resultMapS = dict();
        resultMapT = dict();

        for i in range(len(s)):
            if (resultMapS.get(s[i]) != None):
                resultMapS[s[i]] += 1
            else:
                resultMapS[s[i]] = 1
            
            if (resultMapT.get(t[i]) != None):
                resultMapT[t[i]] += 1
            else:
                resultMapT[t[i]] = 1


        return resultMapS.items() == resultMapT.items()

