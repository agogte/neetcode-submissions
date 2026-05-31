class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        while(stones.length > 1){
            let [stone1, stone2] = stones.sort((a, b) => b - a).splice(0, 2);
            console.log(stone1 + " " + stone2)
            if(stone1 !== stone2) stones.push(Math.abs(stone1 - stone2))
        }
        return stones[0] ?? 0
    }
}
