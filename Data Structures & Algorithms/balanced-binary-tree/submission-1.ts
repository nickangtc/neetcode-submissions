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
    isBalanced(root: TreeNode | null): boolean {
        let res = true

        function dfs(node): number {
            if (node === null) {
                return 0
            }

            const lh = 1 + dfs(node.left)
            const rh = 1 + dfs(node.right)

            if (Math.abs(lh - rh) > 1) {
                res = false
            }

            return Math.max(lh, rh)
        }

        dfs(root)

        return res
    }
}










