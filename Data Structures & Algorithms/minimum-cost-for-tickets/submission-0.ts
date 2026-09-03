class Solution {
    /**
     * @param {number[]} days
     * @param {number[]} costs
     * @return {number}
     */
    mincostTickets(days: number[], costs: number[]): number {
        let n : number = days.length;
        let dp : number[] = new Array(n+1).fill(0);

        for(let i = n - 1; i >= 0; i--){
            dp[i] = Infinity;
            let j = i;
            [1,7,30].forEach((c, idx) => {
                while (j < n && days[j] < days[i] + c){
                    j++;
                }
                dp[i] = Math.min(dp[i], costs[idx] + dp[j]);
            });
        }

        return dp[0];
    }
}
