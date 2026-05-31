class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0)
            return 0;
        nums.sort((a,b) => a - b)
        let maxLen = 1;
        let currLen = 1;

        for(let i = 1; i < nums.length; i ++){
            if(nums[i] === nums[i-1])
                continue;
            else if(nums[i] - nums[i-1] === 1)
                currLen++;
            else{
                maxLen = Math.max(currLen, maxLen);
                currLen = 1
            }
        }
        return Math.max(currLen, maxLen)
    }
}
