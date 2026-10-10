class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map: Record<string, number[]> = {}

        for (let i = 0; i < strs.length; i++) {
            const str = strs[i]
            const sortedStr = str
                .split('')
                .sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0))
                .join('');
            map[sortedStr] = map[sortedStr] ? [...map[sortedStr], i] : [i]
        }

        return Object.values(map).map(indexes => indexes.map(index => strs[index]))
    }
}
