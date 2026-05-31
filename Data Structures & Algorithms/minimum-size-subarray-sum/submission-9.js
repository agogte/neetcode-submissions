class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let minLength = Infinity;
        if (nums.length === 0) return 0;
        let sum = 0;
        let left = 0;
        let right = 0;
        while(right < nums.length){
            sum += nums[right];
            while(sum >= target){
                minLength = Math.min(minLength, right - left + 1);
                sum -= nums[left]
                left++;
            }
            right++;
        }
        return minLength === Infinity ? 0 : minLength;
    }
}