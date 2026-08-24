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
     * @return {void}
     */
    reorderList(head: ListNode | null): void {
        // split the list down the middle (left, right half)
        // reverse the right half
        // walk forward both lists until the end of both,
        // updating pointers 
        let curr = head
        let nodeCount = 0
        while (curr) {
            nodeCount++
            curr = curr.next
        }
        if (nodeCount <= 2) {
            return
        }
        // [1,2,3] => mid = 1
        // [1,2,3,4] => mid = 2
        // [1,2,3,4,5] => mid = 2
        let mid = Math.floor(nodeCount/2)

        // find right list
        let right
        curr = head
        nodeCount = 0
        while (true) {
            if (nodeCount === mid - 1) {
                right = curr.next
                curr.next = null
                break
            }
            nodeCount++
            curr = curr.next //! i forgot this
        }

        // reverse right list, since singly linked list
        // goes in the correct direction only after reverse.
        let prev = null
        curr = right
        while (curr) {
            const temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp
        }

        let curr1 = head
        let curr2 = prev
        console.log('curr1', curr1)
        console.log('curr2', curr2)
        let count = 0
        // [1,2,3]  + [9,8]
        // curr1 = 1, curr2 = 9
        while (curr1 && curr2) {
            if (count % 2 === 0) {
                // add from right
                const temp = curr1.next
                curr1.next = curr2
                curr1 = temp
            } else {
                // add from left
                const temp = curr2.next
                curr2.next = curr1
                curr2 = temp
            }
            count++
        }
    }
}







