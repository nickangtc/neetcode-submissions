class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        const d1 = s1.split('').reduce((a,v) => {
            return {
                ...a,
                [v]: (a[v] ?? 0) + 1
            }
        } ,{}) // O(n) space, O(n) time

        let left = 0
        let right = 0

        // if valid, right++
        // if invalid, left++, right = left
        while (left < s2.length) { // O(n) time
            const rightChar = s2.charAt(right)

            if (d1[rightChar]) {
                // reduce remaining chars needed
                d1[rightChar]--
                if (d1[rightChar] === 0) {
                    delete d1[rightChar]
                }

                if (Object.keys(d1).length === 0) { 
                    return true
                }

                right++
            } else {
                if (left === right) {
                    // invalid window, don't add stuff back to the dic.
                    left++
                    right = left
                    continue
                }

                const leftChar = s2.charAt(left)
                d1[leftChar] = (d1[leftChar] ?? 0) + 1

                left++
            }
        }
        return false
    }
}









