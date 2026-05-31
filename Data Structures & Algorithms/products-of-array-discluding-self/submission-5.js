class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let res = [];
        let product = 1;
        let numOfZero = 0
        nums.forEach(el =>{
            if(el !== 0)
                product *= el;
            else
                numOfZero++;
        });

        if(numOfZero >1)
            return new Array(nums.length).fill(0);
        
        for(let i = 0; i < nums.length; i++){
            if(numOfZero === 1){
                res.push(nums[i] === 0 ? product : 0)
            }
            else res.push(product/nums[i]);
        }
        return res
    }
}
