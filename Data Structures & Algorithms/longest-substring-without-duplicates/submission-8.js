class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        //keep a global maxLength variable
        //start a sliding window, when increment right, increment length;
        //if duplicate found, (use Set()), increment left and decrement length;
        //do a math.max with current length and global maxLength;

        let maxLength = 0;
        let seen = new Set();
        let left = 0, right = left;
        while(right < s.length && left <= right){
            console.log(s[right])
            if(!seen.has(s[right])){
                seen.add(s[right])
                right++;
            }
            else{
                seen.delete(s[left]);
                left++;
            }
            maxLength = Math.max(maxLength, right - left);
            console.log(maxLength, " ", s.substring(left, right))
        }

        return maxLength;

    }
}
