class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
        if(val <= this.minStack[this.minStack.length- 1] || this.minStack.length === 0)
            this.minStack.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        let val = this.stack.pop();
        if(val === this.minStack[this.minStack.length - 1])
            this.minStack.pop();
        return val;
        
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
        
    }
    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1]
    }
}
