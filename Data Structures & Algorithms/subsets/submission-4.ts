/*
Example: nums = [1, 2, 3]

Start:
res = [[]]

`res` is an array of subsets. Initially, it contains just the empty subset.

------------------------------------------------
First loop iteration: num = 1

res before this iteration:
[[]]

Create `additions` by mapping every existing subset and appending 1:

[] → [...[], 1] → [1]

So:
additions = [[1]]

Then combine the old subsets with the new subsets:

res = [...res, ...additions]
res = [...[[]], ...[[1]]]
res = [[], [1]]

------------------------------------------------
Second loop iteration: num = 2

res before this iteration:
[[], [1]]

Create `additions` by mapping every existing subset and appending 2:

[]  → [...[], 2]  → [2]
[1] → [...[1], 2] → [1, 2]

So:
additions = [[2], [1, 2]]

Then combine the old subsets with the new subsets:

res = [...res, ...additions]
res = [...[[], [1]], ...[[2], [1, 2]]]
res = [[], [1], [2], [1, 2]]

------------------------------------------------
Third loop iteration: num = 3

res before this iteration:
[[], [1], [2], [1, 2]]

Create `additions` by mapping every existing subset and appending 3:

[]     → [3]
[1]    → [1, 3]
[2]    → [2, 3]
[1, 2] → [1, 2, 3]

So:
additions = [[3], [1, 3], [2, 3], [1, 2, 3]]

Then combine the old subsets with the new subsets:

res = [
  [],
  [1],
  [2],
  [1, 2],
  [3],
  [1, 3],
  [2, 3],
  [1, 2, 3]
]

Core idea:
For each number, preserve every subset already in `res`,
then create one new version of each of those subsets with the
current number appended.
*/

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     *
     * NOTE: code copied from ChatGPT, not mine.
     * Iterative solution.
     */
    subsets(nums: number[]): number[][] {
        let res: number[][] = [[]];

        for (const num of nums) {
            const additions = res.map((subset) => [...subset, num]);
            res = [...res, ...additions];
        }

        return res;
    }
}
