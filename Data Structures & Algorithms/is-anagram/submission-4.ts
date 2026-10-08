class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length === 0 || t.length === 0) {
            return false
        }
        if (s.length !== t.length) {
            return false
        }
        const sMap = {}
        const tMap = {}

        for (const char of s) {
            sMap[char] = (sMap[char] ?? 0) + 1
        }
        for (const char of t) {
            tMap[char] = (tMap[char] ?? 0) + 1
        }

        for (const [key, value] of Object.entries(sMap)) {
            if (tMap[key] !== value) {
                return false
            }
        }
        return true
    }
}
