class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones: number[]): number {
        if (stones.length === 1) {
            return stones[0]
        }
        if (stones.length === 2) {
            return Math.abs(stones[0] - stones[1])
        }

        const maxHeap = new MaxPriorityQueue()

        for (const stone of stones) {
            maxHeap.enqueue(stone)
        }

        while (maxHeap.size() > 1) {
            const heavy1 = maxHeap.dequeue()
            const heavy2 = maxHeap.dequeue()

            if (heavy1 !== heavy2) {
                maxHeap.enqueue(heavy1 - heavy2)
            }
        }

        return maxHeap.size() === 1 ? maxHeap.dequeue() : 0;
    }
}
