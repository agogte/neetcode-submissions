class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let graph = new Map();
        let inDegree = new Array(numCourses).fill(0);

        for(let [course, pre] of prerequisites){
            graph.set(pre, (graph.get(pre) ?? []).concat(course));
            inDegree[course]++;
        }

        let queue = [];
        let head = 0;
        for(let i = 0 ; i < numCourses; i++){
            if(inDegree[i] === 0) queue.push(i);
        }

        let completed = 0;

        while(queue.length > head){
            let course = queue[head++];
            completed++;

            for(let next of (graph.get(course) ?? [])){
                inDegree[next]--;
                if(inDegree[next] === 0) queue.push(next);
            }
        }

        return completed === numCourses;
    }
}
