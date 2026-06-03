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
        let startTimes = intervals.sort((a,b) => a.start - b.start)
                            .map(a => a.start);
        let endTimes = intervals.sort((a,b) => a.end - b.end)
                            .map(a => a.end);

        let count = 0;
        let maxCount = 0;
        let start = 0; let end = 0;
        while(start < intervals.length){
            if(startTimes[start] < endTimes[end]){
                count++; start++;
            }
            else{
                end++;
                count --;
            }

            maxCount = Math.max(maxCount, count);
        }
        return maxCount;
    }
}
