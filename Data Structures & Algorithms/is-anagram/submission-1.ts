class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false;
        }

        const sMap = new Map()
        const tMap = new Map()

        for (let i = 0; i < s.length; i++) {
            const sChar = s.charAt(i)
            const tChar = t.charAt(i)

            sMap.set(sChar, (sMap.get(sChar) ?? 0) + 1)
            tMap.set(tChar, (tMap.get(tChar) ?? 0) + 1)
        }

        for (const [key, value] of sMap) {
            if (tMap.get(key) !== value) {
                return false;
            }
        }

        return true
    }
}
