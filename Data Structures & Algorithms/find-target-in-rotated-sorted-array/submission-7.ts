class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2);
            if (nums[mid] === target) {
                return mid;
            }

            if (nums[left] <= nums[mid]) {
                // left is sorted half
                if (nums[left] <= target && target < nums[mid]) {
                    // target inside sorted half,
                    // therefore search left half
                    right = mid - 1
                } else {
                    // target is outside sorted half,
                    // therefore search right half
                    left = mid + 1
                }
            } else {
                // right is sorted half
                if (nums[mid] < target && target <= nums[right]) {
                    // target is inside sorted half,
                    // therefore search right half
                    left = mid + 1
                } else {
                    // target is outside sorted half,
                    // therefore search left half
                    right = mid - 1
                }
            }
        }
        return -1;
    }
}
