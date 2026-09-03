class Solution:
    def isValid(self, s: str) -> bool:
        parens = {"(": ")", "{": "}", "[": "]"}
        stack = []

        for paren in s:
            if paren in parens:
                stack.append(paren)
            else:
                if not stack:
                    return False

                openParen = stack.pop()

                if paren != parens.get(openParen):
                    return False
        
        return len(stack) == 0

