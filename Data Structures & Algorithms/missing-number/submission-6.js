class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let len = nums.length;
        let totalSum = (len * (len + 1))/2;
        let sum = nums.reduce((acc, curr) => acc + curr, 0);
        return totalSum - sum;
    }
}
