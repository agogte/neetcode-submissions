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
            let temp = new Set()
            temp.add(s[i])
            while(j < s.length){
                console.log(s[i],s[j])
                if(!temp.has(s[j])){
                    temp.add(s[j])
                }
                else{
                    break;
                }
                j++;
            }
                    longest = Math.max(longest, temp.size);
            console.log("--------")
        }
        return longest
    }
}
