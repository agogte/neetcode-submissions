class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        // brute force
        let result = [];
        let left = 1;
        let right = Math.max(...piles);
        piles.sort((a,b) => a - b);
        while(left <= right){
            let middle = Math.ceil((left + right) / 2)
            console.log(left, right, " ---- ", middle)
            let timeTaken = 0;
            piles.forEach(pile => {
                timeTaken += Math.ceil(pile/middle)
            })
            console.log(timeTaken)
            if(timeTaken <= h){
                result.push(middle)
                right = middle - 1
            }
            else{
                left = middle + 1
            }
            console.log(result)
        }
        return Math.min(...result);
        // let result = new Map() -> k:v => rate:time-taken
        // for(let rate = 1; rate <= Math.max(...piles); rate++){
        //     let timeTaken = 0;
        //     piles.forEach(pile => {
        //         timeTaken += Math.ceil(pile/rate)
        //     })
        //     console.log("timetaken: ", timeTaken)
        //     if(timeTaken > h)
        //         continue;
        //     result.push(rate);
        // }
        //     console.log(result)
        //     console.log(...result)
        // return Math.min(...result);
        // for i in {1..max(pile)}
        // break if time taken > h
        // calculate time taken to eat everything
        //return min valued key
    }
}
