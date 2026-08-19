class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        // REMEMBER: to get mid, you need right and left,
        // so init left and right and update them over iteartions.
        let left = 0
        let right = nums.length - 1
        let res = nums[0]

        while (left <= right) {
            if (nums[left] <= nums[right]) {
                res = Math.min(res, nums[left])
                break
            }

            // !! Remember to cal mid index relative to left
            let mid = left + Math.floor((right - left) / 2)
            res = Math.min(res, nums[mid])

            // to narrow the new search space:
            // a) either bring l to m+1
            // b) or, bring r to m-1
            if (nums[mid] >= nums[left]) {
                // e.g. 5 in [3,4,5,1,2]
                //                ^
                // this means left side first el is smaller
                // which means the mid el is part of sorted left space
                // and it's already the max of that sorted space
                // so we discard left and search right.
                left = mid + 1
            } else {
                // e.g. 2 in [5,1,2,3,4]
                //                ^
                // this means left side first el is larger
                // which means the mid el is part of right sorted space
                // and it's only going to find larger elements to the right
                // so we discard right and search left.
                right = mid - 1
            }
        }

        return res
    }
}
