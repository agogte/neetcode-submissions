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
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        // let visited = new Set();
        // let curr = head;
        // while(curr){
        //     if(visited.has(curr))
        //         return true;
        //     visited.add(curr);
        //     curr = curr.next;
        // }
        // return false;
        let slow = head, fast = head;
        while(fast !== null && fast.next !== null){
            fast = fast.next.next;
            slow = slow.next;

            if(fast == slow)
                return true;
        }
        return false;
    }
}
