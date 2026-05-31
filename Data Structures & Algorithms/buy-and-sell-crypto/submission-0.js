class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max_profit = 0;
        for(let left = 0; left < prices.length - 1; left++){
            let right = prices.length - 1;
            while(left < right){
                if(prices[left] < prices[right]){
                    max_profit = Math.max(max_profit, prices[right] - prices[left])
                }
                right--
            }
        }
        return max_profit


    }
}
