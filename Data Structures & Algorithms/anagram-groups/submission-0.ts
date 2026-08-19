class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const anagrams = [];
        const store: Record<string, number[]> = {}

        const sorted = strs.map(str => str.split('').sort().join(''))

        for (let i = 0; i < sorted.length; i++) {
            const sortedStr = sorted[i]

            store[sortedStr] = store[sortedStr] ? [...store[sortedStr], i] : [i]
        }

        return Object.values(store).map(indices => indices.map(i => strs[i]))
    }
}
