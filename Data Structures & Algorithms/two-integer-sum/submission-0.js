class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        var result = [];
        let hashmap = new Map();
        for(let i = 0; i < nums.length; i++){
            if(!hashmap.has(nums[i]))
            {
                hashmap.set(nums[i], i)
            }
        }
        for(let i = 0; i < nums.length; i++){
            let complement = target - nums[i];
            if (hashmap.has(complement))
                result = [hashmap.get(complement), i]
        }
        return result;
    }
}
