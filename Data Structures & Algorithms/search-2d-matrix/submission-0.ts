class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        const nums = matrix.reduce((a,v) => [...a, ...v], [])

        // do binary search
        let left = 0
        let right = nums.length - 1

        while (left <= right) {
            const mid = left + Math.floor((right-left) / 2)

            if (nums[mid] === target) {
                return true
            }

            if (target > nums[mid]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
        return false
    }
}
