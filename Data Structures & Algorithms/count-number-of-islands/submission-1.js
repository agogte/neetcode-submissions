class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let q = [];
        let noOfIslands = 0;
        let rows = grid.length;
        let cols = grid[0].length;
        let directions = [[1,0], [0,1], [-1, 0], [0, -1]];

        for(let i = 0; i < rows; i++){
            for(let j = 0; j < cols; j++){
                if(grid[i][j] === '1')
                {
                    noOfIslands++;
                    q.push([i,j]);
                    grid[i][j] = '0';
        while(q.length > 0){
            let [r,c]= q.shift();

            for(let [dr, dc] of directions){
                let nr = r + dr, nc = c + dc;

                if(nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === '1'){
                    grid[nr][nc] = '0';
                    q.push([nr,nc]);
                }
            }
        }
                }
            }
        }



        return noOfIslands;
    }
}
