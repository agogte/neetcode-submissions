class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let charSet = new Set();
        let left = 0;
        let maxLen = 0;
        for(let right = 0; right < s.length; right++){
            while(charSet.has(s[right])){
                charSet.delete(s[left])
                left++;
            }
            charSet.add(s[right])
            maxLen = Math.max(maxLen, charSet.size);
        }
        return maxLen
    }
}
