class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let result = new Array(n+1);

        for(let i = 0; i <= n; i++){
            result[i] = i.toString(2).split('1').length - 1;
        }

        return result
    }
}
