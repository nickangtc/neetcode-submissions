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

        let d1copy = {...d1} // O(n) space
        let left = 0
        let right = 0

        // if valid, right++
        // if invalid, left++, right = left
        while (left < s2.length) { // O(n) time
            const rightChar = s2.charAt(right)

            if (d1copy[rightChar]) {
                // reduce remaining chars needed
                d1copy[rightChar]--
                if (d1copy[rightChar] === 0) {
                    delete d1copy[rightChar]
                }

                if (Object.keys(d1copy).length === 0) { 
                    return true
                }

                right++
            } else {
                if (left === right) {
                    left++
                    right = left
                    continue
                }

                const leftChar = s2.charAt(left)
                d1copy[leftChar] = (d1copy[leftChar] ?? 0) + 1

                left++
            }
        }
        return false
    }
}









