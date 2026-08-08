class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = new Array();

        for (let token of tokens) {
            if (token === "+") stack.push(stack.pop() + stack.pop());
            else if (token === "-") {
                let value2 = stack.pop();
                let value1 = stack.pop();
                stack.push(value1 - value2);
            } 
            else if (token === "*") stack.push(stack.pop() * stack.pop());
            else if (token === "/") {
                let value2 = stack.pop();
                let value1 = stack.pop();
                stack.push(Math.trunc(value1 / value2));
            } 
            else stack.push(parseInt(token));
        }

        return stack.pop();
    }
}
