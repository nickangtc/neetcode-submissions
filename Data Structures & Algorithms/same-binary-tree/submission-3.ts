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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
        function dfs(node): number[] {
            if (node === null) {
                return [null]
            }

            const leftArray = dfs(node.left)
            const rightArray = dfs(node.right)

            return [...leftArray, ...rightArray, node.val]
        }

        const pa = dfs(p)
        const qa = dfs(q)
        console.log('pa', pa)
        console.log('qa', qa)

        return pa.every((x, i) => qa[i] === x) && qa.every((x, i) => pa[i] === x)
    }
}
