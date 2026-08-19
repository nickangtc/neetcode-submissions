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

        const queue = []

        for (let i = 0; i < s.length; i++) {
            const current = s[i]

            if (queue.length > 0 && closes[current]) {
                const expect = queue[queue.length - 1]
                if (closes[current] !== expect) {
                    // e.g. got ), expect }
                    return false
                }
                queue.pop()
                continue
            }
            queue.push(current)
        }
        return queue.length === 0 ? true : false
    }
}
