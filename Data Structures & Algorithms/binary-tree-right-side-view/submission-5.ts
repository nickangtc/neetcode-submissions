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
     * @return {number[]}
     * 
     * THIS IS EFFECTIVELY THE SAME AS BFS (SEE PREVIOUS PROBLEM)
     * EXCEPT YOU RETURN THE RIGHT MOST PER LEVEL!
     */
    rightSideView(root: TreeNode | null): number[] {
        if (root === null) {
            return []
        }

        let head = 0
        const queue = [root] // tricky! Remember to start with root inside.
        const res = []

        while (head < queue.length) {
            const levelSize = queue.length - head
            const level = []

            for (let i = 0; i < levelSize; i++) {
                const node = queue[head]
                head++

                level.push(node.val)

                if (node.left) {
                    queue.push(node.left)
                }
                if (node.right) {
                    queue.push(node.right)
                }
            }
            res.push(level[level.length - 1])
        }

        return res
    }
}








