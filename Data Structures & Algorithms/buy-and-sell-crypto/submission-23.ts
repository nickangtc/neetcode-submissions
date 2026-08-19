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
            console.log('buy price:', prices[buy])
            console.log('sell price:', prices[sell])
            if (prices[buy] > prices[sell]) {
                console.log('buying high selling low, next')
                buy++
                sell = buy + 1
                continue
            }

            const p = prices[sell] - prices[buy]
            console.log('profit:', p)

            maxP = Math.max(maxP, p)
            console.log('maxProfit:', maxP)

            sell++
        }

        return maxP
    }
}
