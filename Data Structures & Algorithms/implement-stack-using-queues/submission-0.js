class MyStack {
    constructor() {
        this.queue = [];
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.queue.push(x);
    }

    /**
     * @return {number}
     */
    pop() {
        if(this.queue.length > 0){
            let firstEl = this.queue[this.queue.length - 1];
            this.queue.pop();
            return firstEl;
        }
    }

    /**
     * @return {number}
     */
    top() {
        return this.queue[this.queue.length - 1];
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.queue.length === 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
