class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points: number[][], k: number): number[][] {
        const pq = new PriorityQueue((a,b) => b[0] - a[0])

        for (const [x,y] of points) {
            const dist = x ** 2 + y ** 2
            pq.push([dist, x, y])

            if (pq.size() > k) {
                pq.pop()
            }
        }

        const res = []
        while (pq.size() > 0) {
            const tmp = pq.pop()
            res.push([tmp[1], tmp[2]])
        }
        return res
    }
}
