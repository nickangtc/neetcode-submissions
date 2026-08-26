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
    goodNodes(root: TreeNode | null): number {
        // start with 1 because root is always good node
        function dfs(node: TreeNode, maxSoFar: number): number {
            if (node === null) {
                return 0
            }

            const isGood = node.val >= maxSoFar ? 1 : 0
            const newMax = Math.max(node.val, maxSoFar)

            return isGood + dfs(node.left, newMax) + dfs(node.right, newMax)
        }


        return root ? dfs(root, root.val) : 0
    }
}









