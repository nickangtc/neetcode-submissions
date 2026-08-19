class MinStack {
    data: number[];

    constructor() {
        this.data = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.data.push(val)
    }

    /**
     * @return {void}
     */
    pop(): void {
        if (this.data.length === 0) {
            console.error("Stack empty, nothing to pop.")
        }
        this.data.pop()
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.data[this.data.length - 1]
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return Math.min(...this.data)
    }
}
