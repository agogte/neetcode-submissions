class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        while(left <= right){
            let middle = Math.trunc((left + right)/2);
            if(target === nums[middle])
                return middle;
            else if(target <= nums[middle])
                right--;
            else 
                left++;
        }
        return -1
    }
}
