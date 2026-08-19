class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums.sort((a,b) => a-b)
        const res = []

        for (let i = 0; i < nums.length; i++) {
            const a = nums[i]

            if (a > 0) {
                // not possible to get 0 if a is already > 0
                return res
            }

            if (i > 0 && nums[i] === nums[i-1]) {
                // `a` should not repeat to prevent dupes
                continue
            }

            let l = i + 1
            let r = nums.length - 1

            while (l < r) {
                const sum = a + nums[l] + nums[r]

                if (sum < 0) {
                    l++
                } else if (sum > 0) {
                    r--
                } else {
                    res.push([a, nums[l], nums[r]])
                    l++
                    r--

                    while (l < r && nums[l] === nums[l-1]) {
                        l++
                    }
                }
            }
        }

        return res
    }
}
