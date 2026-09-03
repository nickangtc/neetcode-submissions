class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums: number[], k: number): number {
        // heapify, min heap
        const pq = new MinPriorityQueue()

        for (const num of nums) {
            pq.push(num)

            if (pq.size() > k) {
                pq.pop()
            }
        }

        return pq.pop()
    }
}
