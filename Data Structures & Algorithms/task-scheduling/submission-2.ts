class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks: string[], n: number): number {
        // count the tasks
        let map = new Map<string, number>();
        tasks.forEach(task => {
            map.set(task, (map.get(task) ?? 0) + 1);
        });

        let maxFreq = [...map.values()].sort((a,b) => b - a)[0];
        let maxFreqTasks = [...map.entries()].filter(([task, freq]) => freq === maxFreq).length;
        console.log(maxFreq, maxFreqTasks)

        return Math.max(tasks.length, (1 + n) * (maxFreq - 1) + maxFreqTasks);

    }
}
