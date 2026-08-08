class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = new Array();
        const operators = ['+', '-', '*', '/'];
        let newValue;

        for (let token of tokens) {
            if (Number.isInteger(parseInt(token))) {
                stack.push(token)
            }

            if (operators.includes(token)) {
                let value2 = parseInt(stack.pop());
                let value1 = parseInt(stack.pop());
                
                if (token === "+") newValue = value1 + value2;
                else if (token === "-") newValue = value1 - value2;
                else if (token === "*") newValue = value1 * value2;
                else if (token === "/") newValue = Math.trunc(value1 / value2);

                stack.push(newValue);
            }
        }

        return stack.pop(newValue);
    }
}
