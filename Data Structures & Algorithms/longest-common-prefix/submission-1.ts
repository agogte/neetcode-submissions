class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        let lcp: string = "";

        let firstWord: string = strs[0];
        let i: number = 0;
        while( i < firstWord.length){
            let candidate = lcp + firstWord[i]
            for(let str of strs){
                if(!str.startsWith(candidate)){
                    return lcp;
                }
            }
            i++;
            lcp = candidate;
        }
        return lcp;
    }
}
