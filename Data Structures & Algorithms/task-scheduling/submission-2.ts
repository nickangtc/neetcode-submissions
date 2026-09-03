class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks: string[], n: number): number {
        const freq: Map<string, number> = new Map();
        for (const task of tasks) {
            freq.set(task, (freq.get(task) ?? 0) + 1);
        }

        const maxHeap = new PriorityQueue((a, b) => b[1] - a[1]);
        for (const [task, count] of freq) {
            maxHeap.push([task, count]);
        }

        let time = 0;
        let cooldown: [string, number, number][] = [];

        while (maxHeap.front() || cooldown.length > 0) {
            while (cooldown.length > 0 && cooldown[0][2] <= time) {
                const [t, c] = cooldown.shift();
                maxHeap.push([t, c]);
            }

            if (maxHeap.front()) {
                // process task from heap first
                let [task, count] = maxHeap.pop();

                if (count > 1) {
                    cooldown.push([task, count - 1, time + n + 1]);
                }
            }

            time++;
        }

        return time;
    }
}

