class Solution {
    /**
     * time complexity: O(n * m)
     * space complexity: O(n)
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const counts: Record<string,number> = {};

        for (const n of nums) {
            counts[n] = (counts[n] ?? 0) + 1
        }

        const topK = [];

        while (topK.length < k) {
            let topCount = 0
            let topCountNumber

            for (const [key, value] of Object.entries(counts)) {
                if (value > topCount) {
                    topCount = value
                    topCountNumber = key
                }
            }

            topK.push(topCountNumber)
            delete counts[topCountNumber]
        }

        return topK
    }
}
