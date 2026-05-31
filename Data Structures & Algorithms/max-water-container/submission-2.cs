public class Solution {
    public int MaxArea(int[] heights) {
        var left = 0; var right = heights.Length - 1;
        var maxWater = -9999;
        while(left < right){
            maxWater = Math.Max(maxWater, (right - left) * Math.Min(heights[left], heights[right]));
            if(heights[left] > heights[right])
                right--;
            else
                left++;
        }
        return maxWater;
    }
}
