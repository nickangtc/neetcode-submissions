class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(b: string[][]): boolean {
        const col = new Map()
        const row = new Map()
        const squares = new Map()

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const val = b[r][c]
                const squareKey = `${Math.floor(r / 3)},${Math.floor(c / 3)}`

                if (val === '.') {
                    continue
                }

                if (
                    (col.get(c) && col.get(c).has(val)) ||
                    row.get(r) && row.get(r).has(val) ||
                    squares.get(squareKey) && squares.get(squareKey).has(val)
                ) {
                    return false;
                }

                if (!col.get(c)) {
                    col.set(c, new Set())
                }
                if (!row.get(r)) {
                    row.set(r, new Set())
                }
                if (!squares.get(squareKey)) {
                    squares.set(squareKey, new Set())
                }

                col.get(c).add(val)
                row.get(r).add(val)
                squares.get(squareKey).add(val)
            }
        }

        return true;
    }
}












