class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let result = true;
        let str = s.toLowerCase().split("").filter(x => x !== " " && /^[a-zA-Z0-9]+$/.test(x));
        var len = str.length;
        // console.log(len)
        console.log(str)
        for(let i = 0; i <= (len/2); i++){
            // console.log(str[i], str[len-i-1])
            if(str[i] !== str[len-i-1]){
                console.log(str[i], str[len-i-1])
                result = false;
            }
        }
        return result
    }
}
