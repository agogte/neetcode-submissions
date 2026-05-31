class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = new Map();
        for(let num of nums){
            count.set(num, (count.get(num) || 0) + 1);
        }
        let frequency = [...count.entries()].sort((a,b)=> b[1] - a[1]).map(x => x[0])
        return frequency.slice(0, k)
    }
}
