class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        var pattern = /[a-z0-9]/
        var sList = s.toLowerCase().split('').filter(x => pattern.test(x))
        let l = 0; let r = sList.length - 1;
        while(l<r){
            if(sList[l] !== sList[r])
                return false;
            l++;r--;
        }
        return true
    }
}
