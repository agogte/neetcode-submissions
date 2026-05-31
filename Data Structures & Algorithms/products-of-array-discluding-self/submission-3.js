class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
    let res = [];
    let zeroCount = 0;
    let totalProduct = 1;

    for (let num of nums) {
        if (num === 0) {
            zeroCount++;
        } else {
            totalProduct *= num;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (zeroCount > 1) {
            res.push(0);
        } else if (zeroCount === 1) {
            res.push(nums[i] === 0 ? totalProduct : 0);
        } else {
            res.push(totalProduct / nums[i]);
        }
    }

    return res;
}

}
