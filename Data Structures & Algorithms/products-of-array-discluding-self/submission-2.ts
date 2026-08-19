class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     * 
     * [1,2,0,2,3] => [0,0,12,0,0]
     * [1,0,0,2,3] => [0,0,0,0,0] // 2 or more zeroes, all zeroes
     */
    productExceptSelf(nums: number[]): number[] {
        let zeroCount = 0;

        for (const num of nums) {
            if (num === 0) {
                zeroCount++
            }

            if (zeroCount >= 2) {
                const length = nums.length;
                return new Array(length).fill(0)
            }
        }

        if (zeroCount === 1) {
            let zeroIndex = 0
            let product = 1

            nums.forEach((n, i) => {
                if (n === 0) {
                    zeroIndex = i
                    return
                }
                product *= n
            })

            const res = new Array(nums.length).fill(0)
            res[zeroIndex] = product
            return res
        }

        const product = nums.reduce((a, v) => a * v ,1)
        
        return nums.map(n => product / n)
    }
}










