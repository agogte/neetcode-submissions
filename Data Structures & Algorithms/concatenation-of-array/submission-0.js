class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let length = nums.length
        for(let i = 0; i < length; i++){
            nums[length + i] = nums[i]
        }
        return nums
    }
}
