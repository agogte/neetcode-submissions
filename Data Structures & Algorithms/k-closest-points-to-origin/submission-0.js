class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let minHeap = new MaxPriorityQueue((p) => this.distance(p));
        points.forEach(point => {
            minHeap.push(point);

            if(minHeap.size() > k){
                minHeap.dequeue();
            }
        });

        let result = [];
        while(!minHeap.isEmpty()){
          result.push(minHeap.dequeue())
          };

          return result;
    }

    distance(point){
        return Math.sqrt((point[0])**2 + (point[1])**2);
    }
}
