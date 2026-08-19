class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const numsMap = new Map<number,number[]>()

        for (let i = 0 ; i < nums.length; i++) {
            // key: the number
            // value: the index
            const key = nums[i]
            const indices = numsMap.get(key)

            numsMap.set(key, indices ? [...indices, i] : [i])
        }

        console.log(numsMap)

        for (const [num, indices] of numsMap) {
            const a = num
            const b = target - a
            console.log('a', a)
            console.log('b', b)
            const bIndices = numsMap.get(b)

            console.log('bIndices', bIndices)

            if (a === b) {
                if (bIndices && bIndices.length < 2) {
                    continue
                }
                return [indices[0], indices[1]]
            }


            if (bIndices && bIndices.length > 0) {
                console.log('here 2')
                return [indices[0], bIndices[0]]
            }
        }

        return [0,0]
    }
}
