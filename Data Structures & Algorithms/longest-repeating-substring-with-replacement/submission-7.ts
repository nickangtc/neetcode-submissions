class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        // must keep track of:
        // - left pointer, right pointer
        // - string[left to right] = current window string
        // - unique characters in current window
        const chars: Record<string, number> = {};
        let longest = -Infinity;
        let l = 0;
        let r = 0;

        function isValid() {
            if (Object.keys(chars).length === 0) {
                return true;
            }

            const values = Object.values(chars);
            const topCount = Math.max(...values);
            const totalCount = values.reduce((a, v) => a + v, 0);

            return totalCount - topCount <= k;
        }

        while (r < s.length) {
            chars[s[r]] = (chars[s[r]] ?? 0) + 1;

            // the shrinking must happen in a nested loop
            while (!isValid()) {
                const decrementChar = s[l];

                chars[decrementChar] -= 1;
                if (chars[decrementChar] === 0) {
                    delete chars[decrementChar];
                }

                l++;
            }

            longest = Math.max(longest, r-l+1)
            r++
        }
        return longest;
    }
}
