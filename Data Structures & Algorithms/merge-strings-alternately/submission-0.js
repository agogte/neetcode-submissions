class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let result = "";
        let l1 = word1.length;
        let l2 = word2.length;
        let i;
        for(i = 0; i < Math.min(l1, l2); i++){
            result += word1[i];
            result+= word2[i];
        }
        //work on the case where one string has ended and another string is partially done
        if(i >= l1 && i <l2){
            while(i <l2){
                result += word2[i++];
            }
        }
        else if(i >= l2 && i < l1){
            while(i<l1){
                result+= word1[i++];
            }
        }
        return result;
    }
}
