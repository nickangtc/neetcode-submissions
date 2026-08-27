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
     * @return {boolean}
     */
    isValidBST(root: TreeNode | null): boolean {
        return this.valid(root, -Infinity, Infinity)
    }

    valid(node: TreeNode | null, left: number, right: number): boolean {
        // The key: ALL children on left side must be smaller than
        // current node value. 
        // -Infinity < Current < Previous
        if (node === null) {
            return true;
        }
        if (!(left < node.val && node.val < right)) {
            return false
        }

        return (
            // validate left subtree with updated range (left, node.val)
            this.valid(node.left, left, node.val) &&
            // validate right subtree with updated range (node.val, right)
            this.valid(node.right, node.val, right)
        )
    }
}







