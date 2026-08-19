class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const zipped = position.map((pos, ind) => {
            return [pos, speed[ind]];
        });
        // asc pos order (e.g. [[0,1], [1,2], [7,1]])
        const sorted = zipped.sort((a, b) => a[0] - b[0]);
        const timeToTarget = sorted.map((car) => (target - car[0]) / car[1]);

        let lastBottleneck = null;
        let fleetCount = 0;

        for (let j = sorted.length - 1; j >= 0; j--) {
            fleetCount++;

            const time = timeToTarget[j];

            if (!lastBottleneck) {
                lastBottleneck = time;
                continue;
            }

            if (time <= lastBottleneck) {
                // this car joins a fleet
                fleetCount--;
            } else if (time > lastBottleneck) {
                // this car remains independent as a fleet
                lastBottleneck = time;
            }
        }
        return fleetCount;
    }
}
