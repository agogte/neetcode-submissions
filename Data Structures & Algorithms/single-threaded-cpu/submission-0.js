class Solution {
    /**
     * @param {number[][]} tasks
     * @return {number[]}
     */
    getOrder(tasks) {
        //sort tasks based on enqueue time
        //if same enqueue time, sort them based on process time
        tasks = tasks.map((t, idx) => [...t, idx]);
        tasks.sort((a,b) => a[0] - b[0]);
        
        let result = [];
        let minHeap = new PriorityQueue((a,b) => 
            a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]
        );

        let i = 0; let time = tasks[0][0];
        while(minHeap.size() || i < tasks.length){
            while(i < tasks.length && time >= tasks[i][0]){
                minHeap.enqueue([tasks[i][1], tasks[i][2]]);
                i++;
            }
            if(minHeap.isEmpty()){
                time = tasks[i][0];
            }else {
                let [procTime, idx] = minHeap.dequeue();
                time += procTime;
                result.push(idx);
            }
        }
        return result
    }
}
