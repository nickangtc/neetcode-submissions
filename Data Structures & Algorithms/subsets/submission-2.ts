class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     * 
     * NOTE: code copied from ChatGPT, not mine.
     * Iterative solution.
     */
    subsets(nums: number[]): number[][] {
        let res: number[][] = [[]];

        for (const num of nums) {
            const additions = res.map((subset) => [...subset, num]);
            res = [...res, ...additions];
        }

        return res;
    }
}
