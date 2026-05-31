class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let str = s.toLowerCase().split("").filter(x => /^[a-z0-9]+$/.test(x));
        var len = str.length;
        console.log(str)
        for(let i = 0; i <= (len/2); i++){
            if(str[i] !== str[len-i-1]){
                return false;
            }
        }
        return true
    }
}
