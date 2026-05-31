class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        // let seen = new Map(); // { element: [index]}
        // for(let i = 0; i < nums.length; i++){
        //     if(seen.has(nums[i])){
        //         let index = seen.get(nums[i])
        //         if (Math.abs(index - i) <= k)
        //             return true;
        //     }
        //     seen.set(nums[i], i)
        // }
        // return false;
        const seen = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (seen.has(nums[i])) {
            return true;
        }

        seen.add(nums[i]);

        // Keep the window size to k
        if (seen.size > k) {
            seen.delete(nums[i - k]);
        }
    }

    return false;
    }
}
