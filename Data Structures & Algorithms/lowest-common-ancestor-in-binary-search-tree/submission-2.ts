/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(
        root: TreeNode | null,
        p: TreeNode | null,
        q: TreeNode | null,
    ) {
        let curr = root

        while(curr) {
            // note the lack of equal case - because that's
            // when node is either p or q, which is itself
            // the lowest common ancestor.
            if (p.val < curr.val && q.val < curr.val) {
                curr = curr.left
            } else if (p.val > curr.val && q.val > curr.val) {
                curr = curr.right
            } else {
                break
            }
        }
        return curr
    }
}














