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
        const val = this.store.get(key)
        this.store.delete(key)
        this.store.set(key, val)

        return val
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        this.store.delete(key)
        this.store.set(key, value)

        if (this.store.size > this.cap)  {
            this.store.delete(this.store.keys().next().value)
        }
    }
}
















