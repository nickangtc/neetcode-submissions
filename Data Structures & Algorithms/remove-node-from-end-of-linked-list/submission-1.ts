/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
// N FROM END OF THE LIST.
class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {
        let length = 0
        let curr = head

        // walk once to know the total,
        // we'll use that later to find Nth element.
        while (curr) {
            curr = curr.next
            length++
        }

        if (length === n) {
            return head.next;
        }

        curr = head
        let prev = null
        let count = 0
        while (curr && count !== length - n) {
            prev = curr
            curr = curr.next
            count++
        }
        prev.next = curr.next
        return head
    }
}










