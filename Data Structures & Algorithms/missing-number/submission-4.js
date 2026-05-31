class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let totalSum = 0;
        for(let i = 0; i <= nums.length; i++){
            totalSum += i;
        }

        let sum = nums.reduce((acc, curr) => acc + curr, 0);

        return totalSum - sum;

    }
}
