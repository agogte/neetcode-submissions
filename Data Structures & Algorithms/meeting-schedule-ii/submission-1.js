/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        if(intervals.length === 1) return 1;
        intervals.sort((a,b) => a.start - b.start);
        let minHeap = new MinPriorityQueue();
        for(let interval of intervals){
            if(!minHeap.isEmpty() && minHeap.front() <= interval.start){
                minHeap.dequeue();
            }
            minHeap.enqueue(interval.end);
        }

        return minHeap.size();
    }
}
