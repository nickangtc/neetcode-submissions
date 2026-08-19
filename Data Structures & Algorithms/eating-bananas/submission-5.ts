class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let left = 1;
        let right = Math.max(...piles);
        let bestK = -Infinity;

        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);
            const sumH = piles.map((pile) => Math.ceil(pile / mid)).reduce((a, v) => a + v, 0);
            console.log("sumH", sumH);

            if (sumH <= h) {
                // we found a good k
                bestK = mid;

                // but there could be an even better k (decrease k)
                right = mid - 1;
            } else {
                // we found invalid k (sumH too high, increase k)
                left = mid + 1;
            }
        }

        return bestK;
    }
}
