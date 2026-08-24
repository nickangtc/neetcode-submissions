// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head: Node | null): Node {
        // first pass: mapping old to new
        // second pass: adding pointers in new

        let curr = head
        const oldToNew = new Map()
        oldToNew.set(null, null) //why?

        while (curr) {
            oldToNew.set(curr, new Node(curr.val))
            curr = curr.next
        }

        curr = head
        while (curr) {
            const copy = oldToNew.get(curr)
            copy.next = oldToNew.get(curr.next)
            copy.random = oldToNew.get(curr.random)
            curr = curr.next
        }

        return oldToNew.get(head)
    }
}
