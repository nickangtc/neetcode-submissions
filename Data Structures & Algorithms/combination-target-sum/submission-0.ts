class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        const res = []
        let cur = []
        // this will implicitly track which number has been used
        // ensuring right recursion won't use any used numbers
        let i = 0

        function dfs(i) {
            const sum = cur.reduce((a,c) => a + c, 0)

            if (sum === target) {
                // base case 1: target matched
                res.push([...cur])
                return
            } 

            if (sum > target || i >= nums.length) {
                // base case 2: sum exceeded target, or reached end of nums arr
                return
            }

            // left recursion, allowed to repeat same number
            cur.push(nums[i])
            dfs(i)
            // right recursion, not allowed to repeat same number
            cur.pop()
            dfs(i+1)
        }
        dfs(i)
        return res
    }
}











