class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        intervals.push(newInterval);
        intervals.sort((a, b) => a[0] - b[0]);

        let output = [intervals[0]];

        for (let [start, end] of intervals) {
            let lastIntervalEnd = output[output.length - 1][1];
            if(lastIntervalEnd >= start)
                output[output.length - 1][1] = Math.max(end, lastIntervalEnd);
            else
                output.push([start, end]);
        }
        return output;
    }
}
