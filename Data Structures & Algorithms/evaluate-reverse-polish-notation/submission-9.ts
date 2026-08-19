// 10 mins - failed attempt
// 8 mins - stop, viewed solution.
// 10 mins - failed attempt after undertanding solution
// 10 mins - completed attempt

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
