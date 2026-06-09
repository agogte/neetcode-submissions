class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let maxLength = 0;
        let seen = new Set();
        let left = 0;
        let right = 0;
        while (right < s.length) {
            // case 1: The element does not exist in the window
            if (!seen.has(s[right])) seen.add(s[right]);
            //case 2: if element does exist in the window
            else {
                while (seen.has(s[right])) {
                    seen.delete(s[left]);
                    left++;
                }
                seen.add(s[right]);
            }
            maxLength = Math.max(maxLength, right - left + 1);
            right++;
        }

        return maxLength;
    }
}
