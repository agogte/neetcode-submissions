class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let rows = grid.length;
        let cols = grid[0].length;
        let islands = 0;
        let directions = [[1,0],[0,1],[-1,0],[0,-1]];

        let queue = [];

        for(let r = 0; r < rows; r++){
            for(let c = 0; c<cols; c++){
                if(grid[r][c] === '1')
                {
                    islands++;             // count one island
                    queue.push([r, c]);    // add starting point
                    grid[r][c] = '0';   
                    while(queue.length > 0){
                        let [r,c] = queue.shift();

                        for(let [dr, dc] of directions){
                            let nr = r + dr;
                            let nc = c + dc;

                            if(nr>=0 && nr< rows && nc >= 0 && nc < cols && grid[nr][nc] ==='1')
                            {  
                                grid[nr][nc] = '0';
                                queue.push([nr,nc])
                            }
                        }
                    }
                }
            }
        }
        return islands;
    }
}
