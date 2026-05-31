class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let freshFruits = grid.flat().filter(x => x === 1).length;
        if (freshFruits === 0) return 0;
        
        let minutesPassed = 0;
        let queue = [];
        let rows = grid.length;
        let columns = grid[0].length;

        //add all rotten in the queue
        for(let i = 0;i<rows; i++){
            for(let j = 0; j<columns; j++){
                if(grid[i][j] === 2)
                    queue.push([i,j])
            }
        }

        //direction array
        let directions = [[1,0], [0,1], [-1, 0], [0, -1]];

        //BFS loop
        while(queue.length > 0){
            let size = queue.length;
            let isNewRotten = false;

            for(let i = 0; i < size; i ++){
                let [r, c] = queue.shift();

                for(let [dr, dc] of directions){
                    let nr = r + dr;
                    let nc = c + dc;

                    if(nr >= 0 && nr < rows && nc >= 0 && nc < columns
                        && grid[nr][nc] === 1){
                            grid[nr][nc] = 2;
                            queue.push([nr,nc]);
                            freshFruits --;
                            isNewRotten = true;
                        }
                }
            }
            if (isNewRotten) minutesPassed++;
        }
        return freshFruits === 0 ? minutesPassed : -1;

    }
}
