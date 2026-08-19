class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let l = 0;
        let r = heights.length - 1
        let res = 0

        while (l < r) {
            const lh = heights[l]
            const rh = heights[r]
            const area = (Math.min(lh, rh)) * (r-l)

            if (lh > rh) {
                r--
            } else {
                l++
            }

            res = Math.max(area, res)
        }
        return res
    }
}
