class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates: number[], target: number): number[][] {
        // remember: sort in JS does inplace, mutations.
        candidates.sort((a,b) => a - b)

        const res = []
        const subset = []

        function dfs(i: number, sum: number): void {
            if (sum === target) {
                res.push([...subset])
                return
            } 
            if (sum > target || i >= candidates.length) {
                return
            }

            // left: include the current candidate in the combination,
            // even if it happens to have same value as the previously included candidate
            subset.push(candidates[i])
            dfs(i+1, sum + candidates[i])
            subset.pop()

            // right: exclude current candidate and all following candidates
            // with the same value, then consider the next distinct value.
            while (candidates[i] === candidates[i+1] && i + 1 < candidates.length) {
                i++
            }
            dfs(i + 1, sum)
        }

        dfs(0, 0)
        return res
    }
}
