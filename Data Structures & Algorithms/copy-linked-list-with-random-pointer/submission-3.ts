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

        const oldToNew = new Map()
        // when old is null, new should also be null
        oldToNew.set(null, null)

        let curr = head
        while (curr) {
            const copy = new Node(curr.val)
            oldToNew.set(curr, copy)
            curr = curr.next
        }

        curr = head
        while (curr) {
            const copy = oldToNew.get(curr)

            // This part seems like magic, but it works because
            // by now, the mapping is complete, all nodes have
            // been recreated.
            // So lookups will yield the copy node.
            copy.next = oldToNew.get(curr.next)
            copy.random = oldToNew.get(curr.random)
            curr = curr.next
        }

        return oldToNew.get(head)
    }
}
