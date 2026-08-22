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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        // create dummy that is a node
        const dummy = { val:0, next: null}
        let tail = dummy

        while (list1 && list2) {
            if (list1.val < list2.val) {
                tail.next = list1
                // move list1 pointer forward
                list1 = list1.next
            } else {
                tail.next = list2
                // move list2 pointer forward
                list2 = list2.next
            }
            // move tail pointer forward
            tail = tail.next
        }

        // at this point it's possible that list1 or list2
        // (but not both) still has a series of nodes unappended
        // so attach that to the end of tail.
        if (list1) {
            tail.next = list1
        } else if (list2) {
            tail.next = list2
        }

        return dummy.next
    }
}







