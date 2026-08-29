class KthLargest {
    minHeap: any;
    k: number;
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k: number, nums: number[]) {
        this.minHeap = new MinPriorityQueue();
        this.k = k

        // transform nums array to heap by:
        // 1. enqueueing all items, and
        // 2. dequeuing until k elements left.
        for (const n of nums) {
            this.minHeap.enqueue(n)
        }
        while (this.minHeap.size() > k) {
            this.minHeap.dequeue()
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val: number): number {
        this.minHeap.enqueue(val)
        if (this.minHeap.size() > this.k) {
            this.minHeap.dequeue()
        }
        return this.minHeap.front()
    }
}
