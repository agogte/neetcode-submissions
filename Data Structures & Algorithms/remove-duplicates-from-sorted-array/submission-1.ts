class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums: number[]): number {
        let write: number = 0;

        for(let read = 0; read<nums.length; read++){
            if(nums[read] !== nums[read - 1])
                nums[write++] = nums[read]
        }

        return write;
    }
}
