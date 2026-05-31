class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        let rows = heights.length;
        let cols = heights[0].length;
        let directions = [[1,0],[0,1],[-1,0],[0,-1]];
        let pacific = new Set(), atlantic = new Set();
        let pacQ = [], atlQ = [];

        let bfs = (queue, visited) => {
        while(queue.length){
            let [r,c] = queue.shift();

            for(let [dr, dc] of directions){
                let nr = r + dr, nc = c + dc;
                if(nr >= rows || nr < 0 || nc >= cols || nc < 0)
                    continue;
                if(visited.has(nr + ','+ nc))
                    continue;
                if(heights[nr][nc] >= heights[r][c]){
                    queue.push([nr,nc]);
                    visited.add(nr + ',' + nc);
                }
            }   
        }
        }

        for(let c = 0; c<cols; c++){
            pacQ.push([0, c]);
            atlQ.push([rows - 1, c]);
            pacific.add('0,' + c);
            atlantic.add((rows - 1) + ',' + c);
        }

        for(let r = 0; r < rows; r++){
            pacQ.push([r, 0]);
            atlQ.push([r, cols - 1]);
            pacific.add(r + ',0');
            atlantic.add(r + ',' + (cols - 1));
        }

        bfs(pacQ, pacific);
        bfs(atlQ, atlantic);

        let result = [];
        console.log(pacific);
        for(let key of pacific){
            if(atlantic.has(key)){
                let [r,c] = key.split(",").map(Number);
                result.push([r,c]);
            }
        }

        return result;
    }

}
