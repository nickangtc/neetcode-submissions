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
     * @return {number}
     */
    diameterOfBinaryTree(root: TreeNode | null): number {
        let res = 0

        // returns max height of left and right recursively
        // but also mutates res to continually set longest path
        function dfs(node): number {
            if (node === null) {
                return 0
            }

            const hl = dfs(node.left)
            const hr = dfs(node.right)

            // longest path = max height left + max height right
            res = Math.max(res, hl + hr)
            return 1 + Math.max(hl, hr)
        }
        // start DFS
        dfs(root)

        return res
    }
}





