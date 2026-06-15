class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        let map = new Map<number, number>();
        let threshold = Math.floor((nums.length)/2);

        nums.forEach(el =>
            map.set(el, (map.get(el) ?? 0) + 1)
        )

        return [...map.entries()].filter(([k, v]) => v > threshold).map(x => x[0])[0]
    }
}
