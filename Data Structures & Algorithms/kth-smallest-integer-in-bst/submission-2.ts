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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root: TreeNode | null, k: number): number {
        const sorted = this.sortedListFromTree(root, [])

        return sorted[k - 1]
    }
    sortedListFromTree(node: TreeNode, result: number[] = []): number[] {
        if (node === null) {
            return result
        }

        this.sortedListFromTree(node.left, result)
        result.push(node.val)
        this.sortedListFromTree(node.right, result)

        return result
    }
}
