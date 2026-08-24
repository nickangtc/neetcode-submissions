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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode {
        // SIMPLIFICATION: assume not reversed.
        // [1,2,3] + [4,5,6]

        // CASE: Overflow! 9 + 9 = 18. How to represent that?
        // [9] + [9] => [1,8]

        // first pass: create array of numbers from l1 and l2
        // second pass: construct the numbers by reverse join.
        // add.
        // create new list.

        const a1 = []
        const a2 = []

        let curr1 = l1
        let curr2 = l2

        while (curr1 || curr2) {
            if (curr1) {
                a1.push(curr1.val)
                curr1 = curr1.next
            } 
            if (curr2) {
                a2.push(curr2.val)
                curr2 = curr2.next
            }
        }

        const n1 = BigInt(a1.reverse().join(''))
        const n2 = BigInt(a2.reverse().join(''))
        const sum = String(n1+n2)
        const nodes = sum.split('').reverse().map(x => new ListNode(parseInt(x, 10)))

        let head = nodes[0]
        let curr = head
        for (let i = 1; i < nodes.length; i++) {
            curr.next = nodes[i]
            curr = curr.next
        }
        return head
    }
}








