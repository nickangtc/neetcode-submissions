class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        if (s.length <= 1) {
            return s.length
        }
        const dic = {}

        let longest = 0
        let l = 0
        let r = 1

        dic[s[l]] = 1

        while (r < s.length) {
            const lChar = s[l]
            const rChar = s[r]
            const isRepeat = dic[rChar] && dic[rChar] > 0

            if (isRepeat) {
                // remove from dic, increment left pointer
                dic[lChar]--
                l++
            } else {
                dic[rChar] = (dic[rChar] ?? 0) + 1
                r++
                longest = Math.max(longest, r - l)
            }
        }
        return longest
    }
}
