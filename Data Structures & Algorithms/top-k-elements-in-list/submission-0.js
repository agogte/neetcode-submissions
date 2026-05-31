class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let hashmap = new Map();

    // Count frequencies
    for (let i = 0; i < nums.length; i++) {
        if (hashmap.has(nums[i])) {
            hashmap.set(nums[i], hashmap.get(nums[i]) + 1);
        } else {
            hashmap.set(nums[i], 1);
        }
    }
    let fewquentKElements = Array.from(hashmap).sort((a,b) => b[1] - a[1])
            .slice(0,k)
            .map(entry => entry[0])
    
    return fewquentKElements;
    }
}
