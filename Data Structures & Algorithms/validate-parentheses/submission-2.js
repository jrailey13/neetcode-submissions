class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        const open = ['(', '{', '['];
        const closed = [')', '}', ']'];
        let popped;

        for (let char of s) {
            if (closed.includes(char)) {
                popped = stack.pop();
                console.log(popped)
                console.log(char)

                if (!open.includes(popped)) return false
                if (open.indexOf(popped) !== closed.indexOf(char)) return false;

                continue
            }

            stack.push(char);
            console.log(stack)
        }

        if (stack.length > 0) return false;
        else return true;
    }
}
