class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x, n) {
        let result = 1;
        if(n >= 0){
            for(let i = 1; i <= n; i++){
            result *= x;
        }
        }
        else{
            for(let i = n; i <0; i++){
                result /=x;
            }
        }
        
        return result;
    }
}
