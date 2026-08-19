// 10 mins: 20% to solution
class TimeMap {
    keyStore: Map<string,[string,number][]>;

    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key: string, value: string, timestamp: number): void {
        if (!this.keyStore.get(key)) {
            this.keyStore.set(key, [])
        }
        this.keyStore.get(key).push([value, timestamp])
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key: string, timestamp: number): string {
        const entry = this.keyStore.get(key)

        if (!entry) {
            return ""
        }

        // binary search
        let left = 0
        let right = entry.length - 1
        let res = ''

        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2)

            if (entry[mid][1] <= timestamp) {
                res = entry[mid][0]
                left = mid + 1
            } else {
                right = mid - 1
            }
        }

        return res
    }
}











