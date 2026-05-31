class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        var result = [];
        let i = 0;
        let j = nums.length - 1;
        while(i<= j){
            if(nums[i] + nums[j] > target)
                j--;
            if(nums[i] + nums[j] < target)
                i++;
            if(nums[i] + nums[j] === target){
                result.push(i+1);
                result.push(j+1);
                break;
            }
        }
        return result
        
    }
}
