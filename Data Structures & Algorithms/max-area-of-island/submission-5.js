class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let rows = grid.length;
        let cols = grid[0].length;
        let directions = [[1,0],[0,1], [-1, 0], [0,-1]];
        let maxArea = 0;
        let q = [];

        for(let r = 0; r < rows; r++){
            for(let c = 0; c < cols; c++){
                if(grid[r][c] === 1){
                    q.push([r,c]);
                    grid[r][c] = 0;
                    let area = 0;
                    while(q.length > 0){
                        let [r,c] = q.shift();
                        area++;
                        for(let [dr, dc] of directions){
                            let nr = dr + r;
                            let nc = dc + c;

                            if(nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === 1){
                                grid[nr][nc] = 0;
                                q.push([nr,nc]);
                            }
                        }
                    }
                    maxArea = Math.max(area, maxArea);
                }
            }
        }

        

        return maxArea;

    //     let dfs = (r,c) => {
    //         if(r <0 || c < 0 || r >= rows || c >= cols || grid[r][c] === 0)
    //             return 0;
    //         let area = 1;
    //         grid[r][c] = 0;

    //         for(let [dr, dc] of directions){
    //             let nr = r + dr;
    //             let nc = c + dc;
    //             area += dfs(nr, nc)
    //         }
    //         return area;
    //     }

    //     for(let r = 0; r < rows; r++){
    //         for(let c = 0; c < cols; c++){
    //             if(grid[r][c] === 1){
    //                 let area = dfs(r,c);
    //                 maxArea = Math.max(area, maxArea);
    //             }
    //         }
    //     }
    //     return maxArea;
    }
}