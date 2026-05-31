class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let res = []
        for(let i = 0; i < nums.length; i ++){
            let total = 1;
            let temp = [];
            temp = Array.from(nums);
            temp.splice(i, 1);
            console.log(temp)
            temp.forEach(el => total *= el)
            console.log(total)
            res.push(total)
            console.log(res)
        }
        return res
    }
}
