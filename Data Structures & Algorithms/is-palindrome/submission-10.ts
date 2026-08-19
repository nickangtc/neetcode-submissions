class Solution {
    /**
     * @param {string} alphanumerics
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const ss = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

        let left = 0;
        let right = ss.length - 1;

        while (right !== left && right > left) {
            console.log(ss.charAt(left))
            console.log(ss.charAt(right))
            console.log('left', left)
            console.log('right', right)
            console.log('\n')
            if (ss.charAt(left) !== ss.charAt(right)) {
                return false;
            }
            left++
            right--
        }
        return true
    }
}
