class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        let number = digits.join('')
        number++;
        return number.toString().split('').map(el => parseInt(el));
    }
}
