class LinkedList {
    constructor() {
        this.head = new ListNode(0, null);
        this.tail = this.head;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    // get(index) {
    //     let curr = this.head.next;
    //     while(index>0 && curr){
    //         curr = curr.next;
    //         index--;
    //     }
    //     if(index === 0 && curr)
    //         return curr.val
    //     else
    //         return -1;
    // }
    get(index) {
        let curr = this.head.next;
        let i = 0;
        while (curr) {
            if (i === index) {
                return curr.val;
            }
            i++;
            curr = curr.next;
        }
        return -1; // Index out of bounds or list is empty
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        const prev = new ListNode(val);
        prev.next = this.head.next;
        this.head.next = prev;
        if(!prev.next)
            this.tail = prev;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        this.tail.next = new ListNode(val);
        this.tail = this.tail.next;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        let i = 0;
        let curr = this.head;
        while (i < index && curr) {
            i++;
            curr = curr.next;
        }

        // Remove the node ahead of curr
        if (curr && curr.next) {
            if (curr.next === this.tail) {
                this.tail = curr;
            }
            curr.next = curr.next.next;
            return true;
        }
        return false;
    }



    /**
     * @return {number[]}
     */
    getValues() {
        let res = [];
        let curr = this.head.next;
        while(curr){
            res.push(curr.val);
            curr = curr.next;
        }
        return res;
    }
}

class ListNode{
    constructor(val = 0, next = null){
        this.val = val;
        this.next = next;
    }
}
