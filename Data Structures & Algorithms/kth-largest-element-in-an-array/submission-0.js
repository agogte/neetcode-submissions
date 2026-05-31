class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        let minHeap = new MinPriorityQueue();

        nums.forEach(el => {
            minHeap.enqueue(el);

            if(minHeap.size() > k){
                minHeap.dequeue();
            }
        });

        return minHeap.front();
    }
}
