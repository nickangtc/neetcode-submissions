class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let buy = 0
        let sell = 1
        let maxP = 0

        while (buy < prices.length && sell < prices.length) {
            if (prices[buy] > prices[sell]) {
                buy++
                sell = buy + 1
                continue
            }

            const p = prices[sell] - prices[buy]
            maxP = Math.max(maxP, p)

            sell++
        }
        return maxP
    }
}
