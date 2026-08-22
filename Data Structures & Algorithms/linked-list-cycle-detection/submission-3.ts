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
    hasCycle(head: ListNode | null): boolean {
        // assumption I'm going to make:
        // every node has a unique value.
        const seen = new Map<ListNode, boolean>()

        while (head) {
            console.log(seen)
            if (seen.has(head)) {
                return true
            }
            seen.set(head, true)
            head = head.next
        }
        return false
    }
}








