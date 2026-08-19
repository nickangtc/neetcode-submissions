class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if (nums.length === 0) {
            return 0;
        }

        let longest = 0;
        let seqLength = 0;
        let seqVal = 0;

        const dic = new Set(nums);
        for (const val of dic) {
            // is this the start of a sequence?
            if (!dic.has(val - 1)) {
                seqVal = val;
                seqLength = 1;

                while (dic.has(seqVal + 1)) {
                    seqLength++;
                    seqVal++;
                }
                longest = Math.max(longest, seqLength);
            }
        }

        return longest;
    }
}
