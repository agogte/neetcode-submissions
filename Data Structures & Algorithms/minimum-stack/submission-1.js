class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val) {
        this.stack.push(val);
        if(val <= this.minStack[this.minStack.length -1] || this.minStack.length === 0)
            this.minStack.push(val);
        return null;
    }

    pop() {
        let val = this.stack.pop()
        if(val === this.minStack[this.minStack.length -1])
            this.minStack.pop();
        return val;
    }

    top() {
        return this.stack[this.stack.length - 1]
    }

    getMin() {
        return this.minStack[this.minStack.length - 1]
    }
}
