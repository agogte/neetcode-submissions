class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let max_area = 0;

        while(left < right){
            let min_height = Math.min(heights[left], heights[right])
            let width = right - left;
            let area = min_height * width;
            max_area = Math.max(max_area, area)

            if(heights[left] < heights[right])
                left++;
            else
                right--;
        }

        return max_area

    }
}
