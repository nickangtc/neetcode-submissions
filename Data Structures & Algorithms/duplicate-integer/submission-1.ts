class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const noDupes = new Set(nums);

        if (noDupes.size !== nums.length) {
            return true;
        }
        return false;
    }
}
