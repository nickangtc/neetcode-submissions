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
        const seen = new Set<ListNode>()

        while (head) {
            if (seen.has(head)) {
                return true
            }
            seen.add(head)
            head = head.next
        }
        return false
    }
}








