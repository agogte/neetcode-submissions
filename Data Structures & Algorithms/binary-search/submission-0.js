class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let start = 0;
        let end = nums.length - 1;
        while(end >= start){
            let middle = Math.ceil((end + start)/2);
            if (nums[middle] === target)
                return middle;
            else if(target < nums[middle])
                end = middle -1;
            else if( target > nums[middle])
                start = middle+1;
        }
        return -1
    }
}
