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
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        intervals.sort((a,b) => a.start - b.start);
        for(let i  = 1; i < intervals.length; i++){
            let lastInterval = intervals[i-1];
            let lastEnd = lastInterval.end;
            let currStart = intervals[i].start;
            if(lastEnd > currStart)
                return false;
        }

        return true;
    }
}
