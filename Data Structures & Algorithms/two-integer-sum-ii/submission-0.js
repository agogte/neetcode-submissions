class Solution {
    /**
     * @param {number[]} numbers
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
            let complement = target - nums[i];
            if (hashmap.has(complement))
                result = [hashmap.get(complement)+1, i+1]
        }
        return result;
        
    }
}
