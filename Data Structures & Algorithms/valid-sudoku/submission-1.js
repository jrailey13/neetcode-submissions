class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const row = new Set();
        const col = new Set();
        const square = new Set();

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                let num = board[r][c];

                if (num === ".") continue

                let rowKey = `row-${r}-${num}`
                let colKey = `col-${c}-${num}`;
                let squareKey = `square-${Math.trunc(r / 3)}-${Math.trunc(c/3)}-${num}`;

                if (row.has(rowKey) || col.has(colKey) || square.has(squareKey)) return false;

                row.add(rowKey);
                col.add(colKey);
                square.add(squareKey);
            }
        }
        return true;
    }
}
