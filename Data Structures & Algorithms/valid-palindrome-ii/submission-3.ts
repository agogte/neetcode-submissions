class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s: string): boolean {
        let left: number = 0;
        let right: number = s.length - 1;
        while(left < right){
            if(s[left] === s[right]){
                left++;
                right--;
            }
            else {
                return (this.isPalindrome(s, left+1, right)
                || this.isPalindrome(s, left, right - 1))
            }
        }


        return true;
    }

    isPalindrome(s: string, left: number, right: number) {
        while(left < right){
            if(s[left++] !== s[right--])
                return false;
        }
        return true;
    }
}
