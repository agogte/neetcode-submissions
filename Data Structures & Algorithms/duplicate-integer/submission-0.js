class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        var found = false;
        nums.forEach(element => {
            if (nums.filter(x => x === element).length > 1)
                found = true;
        });
        return found;
    }
}
