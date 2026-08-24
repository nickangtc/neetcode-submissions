class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums: number[]): number {
        const seen = new Set()
        for (const n of nums) {
            if (seen.has(n)) {
                return n
            }
            seen.add(n)
        }
    }
}
