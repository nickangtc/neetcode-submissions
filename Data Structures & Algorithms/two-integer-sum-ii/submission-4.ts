class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let right = numbers.length - 1
        let left = 0

        while (left < right) {
            const sum = numbers[left] + numbers[right]

            if (sum === target) {
                return [left + 1, right + 1]
            }

            if (sum < target) {
                left++
            } else if (sum > target) {
                right--
            }
        }

        return [left,right]
    }
}
