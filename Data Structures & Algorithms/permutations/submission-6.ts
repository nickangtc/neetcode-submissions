class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums: number[]): number[][] {
        let perms = [[]]

        for (const num of nums) {
            // e.g. num = 1
            const newPerms = []
            for (const perm of perms) {
                // e.g. perm = [1,2] ... [2] ... [3,4,5]
                // with the current copy of perm:
                for (let i = 0; i < perm.length + 1; i++) {
                    // insert num at every possible slot
                    const permCopy = [...perm]
                    permCopy.splice(i,0,num)
                    newPerms.push(permCopy)
                }
            }
            perms = newPerms
        }
        return perms
    }
}
