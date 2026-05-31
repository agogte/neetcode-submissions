class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        while(left < right){
            let sum = nums[left] + nums[right];
            console.log(sum)
            if(target === sum)
                return [left+1, right+1]
            else if(target > sum)
                left++;
            else
                right--;
        }
        return
    }
}
