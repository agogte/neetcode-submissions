class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        let res = 0;
        nums.forEach(el => {
            res ^= el;
        });
        return res;
    }
}
