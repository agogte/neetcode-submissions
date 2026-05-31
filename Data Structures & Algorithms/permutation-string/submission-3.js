class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length)
            return false;
        s1 = s1.split('').sort().join('')
        for(let left = 0; left <= s2.length - s1.length; left++){
            let right = left + s1.length
            let windowStr = s2.substring(left, right)
            windowStr = windowStr.split('').sort().join('')
            if(windowStr === s1)
                return true;
        }
        return false;
    }
}
