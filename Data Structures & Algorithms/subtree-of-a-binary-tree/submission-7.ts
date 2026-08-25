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
     * 
     * worst case time complexity: O(n * m)
     * space complexity: O(h_root + h_subRoot)
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

            // val check on t1 and t2 is shortcircuiting to false
            // and won't cause DFS to finish, exiting early.
            // => O(m) time - max is touching every node in subRoot
            // => O(h) space - stack space according to height
            return t1.val === t2.val &&
                isIdentical(t1.left, t2.left) &&
                isIdentical(t1.right, t2.right)
        }

        // O(n) space -> max is total number of nodes in root
        // O(n) time -> max is total number of nodes in root
        const candidates = [root]

        while (candidates.length > 0) {
            const t = candidates.pop()

            if (isIdentical(t, subRoot)) {
                return true
            }

            if (t.left) {
                candidates.push(t.left)
            }
            if (t.right) {
                candidates.push(t.right)
            }
        }

        return false
    }
}
