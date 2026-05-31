class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if(s.length === 0)
            return 0;
        let longest = 1;
        for (let i = 0; i < s.length; i++){
            let j = i+1;
            let temp = [s[i]]
            while(j < s.length){
                console.log(s[i],s[j])
                if(!temp.includes(s[j])){
                    temp.push(s[j])
                }
                else{
                    break;
                }
                j++;
            }
                    longest = Math.max(longest, temp.length);
            console.log("--------")
        }
        return longest
    }
}
