class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let rows = grid.length;
        let cols = grid[0].length;
        let inf = 2147483647;
        let queue = [];

        if (!grid.flat().some(x => x === 0))
            return grid;

        let directions = [[1,0], [0,1], [-1, 0], [0,-1]];

        //add all trasure chest locations
        for(let i = 0; i < rows; i ++){
            for(let j = 0; j < cols; j++){
                if(grid[i][j] === 0)
                    queue.push([i,j,0]) //row,col, distance
            }
        }

        //BFS loop
        while(queue.length > 0){
            let [r, c, dist] = queue.shift();

            for(let [dr, dc] of directions){
                let nr = r + dr;
                let nc = c + dc;

                if(nr >= 0 && nr< rows && nc >= 0 && nc < cols && grid[nr][nc] === inf)
                {
                    grid[nr][nc] = dist + 1;
                    queue.push([nr, nc, dist + 1]);
                }
            }
        }

    }
}
