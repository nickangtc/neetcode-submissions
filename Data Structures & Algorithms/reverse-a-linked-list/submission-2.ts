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
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        let curr = head
        let prev = null

        while (curr) {
            // store next so we dont lose it
            const temp = curr.next
            // point current to previous
            curr.next = prev
            // set previous to current
            prev = curr
            // point current to old next for processing next
            curr = temp
        }
        
        return prev
    }
}
