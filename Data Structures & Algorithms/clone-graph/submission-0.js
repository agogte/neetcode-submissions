/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if(!node) return null;
        let map = new Map();
        let q = [];
        map.set(node, new Node(node.val));
        q.push(node);

        while(q.length > 0){
            let curr = q.shift();
            for(let n of curr.neighbors){
                if(!map.has(n)){
                    map.set(n, new Node(n.val));
                    q.push(n);
                }
                    
            map.get(curr).neighbors.push(map.get(n));
            }
        }
        return map.get(node);
    }
}
