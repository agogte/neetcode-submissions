class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let str = s.toLowerCase().split("").filter(x => this.isAlphaNumeric(x))
        let len = str.length;
        console.log(str, len)
        for(let i = 0; i < (len/2) ; i++){
            if(str[i] !== str[len-i-1]){
                console.log(str[i], str[len-i-1])
                return false;
            }
        }
        return true;
    }

    isAlphaNumeric(x){
        return /[a-z0-9]/.test(x)
    }
}
