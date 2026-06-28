class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x: number): number {
        let left: number = 0;
        let right: number = x;
        while(left <= right){
            let middle: number = Math.floor((left + right) / 2);
            let squaredMiddle = Math.pow(middle, 2);
            if(squaredMiddle === x)
                return middle;
            else if (squaredMiddle > x){
                right = middle - 1;
            }
            else
                left = middle + 1;
        }

        return right;
    }
}
