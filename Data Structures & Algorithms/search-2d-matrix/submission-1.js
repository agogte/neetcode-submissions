class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        return matrix.some(row => this.search(row, target))
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
