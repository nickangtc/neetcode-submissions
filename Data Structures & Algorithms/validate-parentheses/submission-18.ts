class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        if (s.length <= 1) {
            return false;
        }
        const closes = {
            "}": "{",
            ")": "(",
            "]": "["
        }

        const stack = []

        for (let i = 0; i < s.length; i++) {
            const current = s[i]

            if (stack.length > 0 && closes[current]) {
                const expect = stack[stack.length - 1]
                if (closes[current] !== expect) {
                    // e.g. got ), expect }
                    return false
                }
                stack.pop()
                continue
            }
            stack.push(current)
        }
        return stack.length === 0
    }
}
