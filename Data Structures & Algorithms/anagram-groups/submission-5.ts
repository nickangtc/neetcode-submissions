class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map: Record<string, string[]> = {}

        for (let i = 0; i < strs.length; i++) {
            const str = strs[i]
            const sortedStr = str
                .split('')
                .sort()
                .join('');
            map[sortedStr] = map[sortedStr] ? [...map[sortedStr], str] : [str]
        }

        return Object.values(map)
        // return Object.values(map).map(indexes => indexes.map(index => strs[index]))
    }
}
