class LRUCache {
    cap: number;
    store: Map<number, number>;
    /**
     * @param {number} cap
     */
    constructor(cap: number) {
        this.cap = cap
        this.store = new Map<number, number>()
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        if (!this.store.has(key)) {
            return -1
        }
        const val = this.store.get(key) // O(1)
        this.store.delete(key) // O(1)
        this.store.set(key, val) // O(1)

        return val
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        this.store.delete(key) // O(1)
        this.store.set(key, value) // O(1)

        if (this.store.size > this.cap)  {
            this.store.delete(this.store.keys().next().value) // O(1)
        }
    }
}
















