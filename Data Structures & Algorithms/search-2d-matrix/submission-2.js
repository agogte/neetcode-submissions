class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let result = false;
        matrix.forEach(row => {
            if(target <= row[row.length-1] && target >= row[0]){
                result = this.search(row, target)
            }
        })
        return result
    }

    search(nums, target) {
        let start = 0;
        let end = nums.length - 1;
        while(end >= start){
            let middle = Math.ceil((end + start)/2);
            if (nums[middle] === target)
                return true;
            else if(target < nums[middle])
                end = middle -1;
            else if( target > nums[middle])
                start = middle+1;
        }
        return false;
    }
}
