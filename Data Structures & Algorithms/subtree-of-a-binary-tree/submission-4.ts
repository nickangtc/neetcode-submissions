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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
        // stack of subtrees to check against one by one
        // isIdentical(t1, t2): boolean
        if (!root || !subRoot) {
            return false
        }

        function isIdentical(t1: TreeNode, t2: TreeNode): boolean {
            if (!t1 || !t2) {
                return t1 === t2
            }

            return t1.val === t2.val &&
                isIdentical(t1.left, t2.left) &&
                isIdentical(t1.right, t2.right)
        }

        const subtrees = [root]

        while (subtrees.length > 0) {
            const t = subtrees.pop()

            if (isIdentical(t, subRoot)) {
                return true
            }

            if (t.left) {
                subtrees.push(t.left)
            }
            if (t.right) {
                subtrees.push(t.right)
            }
        }

        return false
    }
}
