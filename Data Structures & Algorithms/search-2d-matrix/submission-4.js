class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let rows = matrix.length;
        let cols = matrix[0].length;

        let left = 0;
        let right = rows - 1;

        while (left <= right) {
            let middle = Math.trunc((right + left) / 2);
            if (target > matrix[middle][cols - 1]) {
                left = middle + 1;
            } else if (target < matrix[middle][0]) {
                right = middle - 1;
            }
            else {
                let l1 = 0, r1 = cols - 1;
                while (l1 <= r1) {
                    let m1 = Math.trunc((l1 + r1) / 2);
                    if (target < matrix[middle][m1])
                        r1 = m1 - 1;
                    else if (target > matrix[middle][m1])
                        l1 = m1 + 1;
                    else
                        return true;
                }
                return false;
            }
        }
        return false;
    }
}
