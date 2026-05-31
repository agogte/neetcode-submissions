/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let firstNumber = this.getNumber(l1);
        let secondNumber = this.getNumber(l2);

        let sum = firstNumber + secondNumber;

        return this.linkedListify(sum);

    }

    getNumber(list) {
        let sum = 0;
        let i = 0;
        let current = list;
        while(current){
            sum+= current.val * Math.pow(10, i);
            current = current.next;
            i++;
        }
        return sum;
    }

    linkedListify(sum){
        let head = new ListNode();
        let tail = head;
        let sumList = sum.toString().split('').reverse();
        sumList.forEach(el => {
            let newNode = new ListNode(parseInt(el));
            tail.next = newNode;
            tail = newNode;
        })
        return head.next;
    }
}
