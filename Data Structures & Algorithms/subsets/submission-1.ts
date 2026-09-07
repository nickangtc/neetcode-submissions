class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        const res = []
        const subset = []

        function dfs(i) {
            // base case
            if (i >= nums.length) {
                // add copy to results
                res.push([...subset])
                // exit up the call stack
                return
            }

            // option 1: add the element
            subset.push(nums[i])
            dfs(i + 1)

            // option 2: don't add the element
            subset.pop()
            dfs(i + 1)
        }

        dfs(0)

        return res
    }
}
