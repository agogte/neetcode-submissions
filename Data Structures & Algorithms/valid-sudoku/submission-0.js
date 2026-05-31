class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let pattern = /[1-9]$/;
        //check rows
        for (let row of board) {
            let rowCleaned = row.filter(x => x.match(pattern));
            if (this.doesContainDuplicate(rowCleaned)) return false;
        }
        //check columns
        for (let i = 0; i < 9; i++) {
            let column = [];
            for (let j = 0; j < 9; j++) {
                column.push(board[j][i]);
            }
            if (this.doesContainDuplicate(column.filter(x => x.match(pattern)))) return false;
            console.log(column);
        }

        //check squares
        for (let row = 0; row < 9; row += 3) {
            for (let col = 0; col < 9; col += 3) {
                let box = [];
                for (let r = row; r < row + 3; r++) {
                    for (let c = col; c < col + 3; c++) {
                        box.push(board[r][c]);
                    }
                }
                if (this.doesContainDuplicate(box.filter(x => x.match(pattern)))) return false;
            }
        }
        return true;

    }

    doesContainDuplicate(row) {
    let seen = new Set();
    for (let el of row) {
        if (seen.has(el)) return true;
        seen.add(el);
    }
    return false;
}

}
