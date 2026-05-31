class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x, n) {
        if(x === 0) return 0;
        if(n == 0) return 1;
        if (n < 0) {
            n = -n;
            x = 1/x;
        }
        const half = this.myPow(x, Math.floor(n / 2));

        if (n % 2 === 0) {
            return half * half;
        } else {
            return half * half * x;
        }
    }
}
