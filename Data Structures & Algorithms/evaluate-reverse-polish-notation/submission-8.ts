// 10 mins
// 8 mins - stop, solution.
// 10 mins - attempt after undertanding solution

class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stack = []
        const operators = "+-*/".split('')
        
        for (let i = 0; i < tokens.length; i++) {
            const val = tokens[i]
            if (operators.includes(val)) {
                const second = stack.pop()
                const first = stack.pop()

                switch (val) {
                    case "+":
                        stack.push(first + second)
                        break
                    case "-":
                        stack.push(first - second)
                        break
                    case "*":
                        stack.push(first * second)
                        break
                    case "/":
                        stack.push(Math.trunc(first / second))
                        break;
                }
            } else {
                stack.push(parseInt(val, 10))
            }
        }
        return stack[0]
    }
}
