class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let rows = grid.length;
        let cols = grid[0].length;
        if(!grid.flat().some(x => x === 1)){
            return 0;
        }
        let maxArea = -9999;
        let directions = [[1,0],[0,1],[-1,0],[0,-1]];
        let queue = [];

        for(let r = 0; r < rows; r++){
            for(let c = 0; c<cols; c++){
                if(grid[r][c] === 1){
                    queue.push([r,c])
                    grid[r][c] = 0;
                    let area = 1;
                    while(queue.length > 0){
                        let [r,c] = queue.shift();

                        for(let [dr,dc] of directions){
                            let nr = r + dr;
                            let nc = c + dc;

                            if(nr >= 0 && nr <rows && nc >= 0 && nc < cols && grid[nr][nc] === 1){
                                queue.push([nr,nc]);
                                grid[nr][nc] = 0;
                                area++;
                            }
                        }
                    }

                    maxArea = Math.max(maxArea, area);
                }
            }
        }

        return maxArea;
    }
}
