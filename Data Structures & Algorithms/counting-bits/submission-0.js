class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let result = new Array(n+1);

        let numToBin = (n) => n.toString(2); 
        for(let i = 0; i <= n; i++){
            result[i] = numToBin(i).split('1').length - 1;
        }

        return result
    }
}
