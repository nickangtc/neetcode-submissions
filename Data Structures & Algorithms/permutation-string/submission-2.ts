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
        } ,{})

        let d1copy = {...d1}
        let left = 0
        let right = 0

        // if valid, right++
        // if invalid, left++, right = left
        while (left < s2.length) {
            const rightChar = s2.charAt(right)

            if (d1copy[rightChar]) {
                d1copy[rightChar]--
                if (d1copy[rightChar] === 0) {
                    delete d1copy[rightChar]
                }

                if (Object.keys(d1copy).length === 0) {
                    return true
                }

                right++
            } else {
                d1copy = {...d1}
                left++
                right = left
            }
        }
        return false
    }
}









