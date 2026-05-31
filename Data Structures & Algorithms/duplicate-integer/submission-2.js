class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // return new Set(nums).size < nums.length;
        let mySet = new Set();
        let isDuplicate = false;
        nums.forEach(el => {
            if(mySet.has(el)){
                isDuplicate = true;
                return
            }
            else
                mySet.add(el);
        })
        return isDuplicate;
    }
}
