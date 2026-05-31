/**
 * Definition of Interval:
 * class Interval  {
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
    minMeetingRooms(intervals: Interval[]): number {
        let startTimes: number[] = intervals.sort((a,b) => a.start - b.start).map(a => a.start);
        let endTimes: number[] = intervals.sort((a,b) => a.end - b.end).map(a => a.end);

        let count: number = 0;
        let maxCount: number = 0;

        let start: number = 0;
        let end: number = 0;

        while(start < intervals.length){
            if(startTimes[start] < endTimes[end]){
                start += 1;
                count += 1;
            }
            else{
                end += 1;
                count -= 1;
            }

            maxCount = Math.max(maxCount, count);
        }

        return maxCount;
    }
}
