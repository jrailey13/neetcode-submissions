class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const seen = new Set(); 

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const num = board[r][c];

                if (num === ".") continue;

                let row = `row-${r}-${num}`;
                let col = `col-${c}-${num}`;
                let square = `square-${Math.trunc(r / 3)}-${Math.trunc(c / 3)}-${num}`;

                if (seen.has(row) || seen.has(col) || seen.has(square)) return false;

                seen.add(row);
                seen.add(col);
                seen.add(square);
            }
        }

        return true;
    }
}
