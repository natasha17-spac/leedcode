// Объект дерева для [3,9,20,null,null,15,7]
const tree = {
	val: 3,
	left: {
		val: 9,
		left: null,
		right: null
	},
	right: {
		val: 20,
		left: {
			val: 15,
			left: null,
			right: null
		},
		right: {
			val: 7,
			left: null,
			right: null
		}
	}
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 *
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    debugger;
    if(root === null) return 0
    let leftDepth= maxDepth(root.left);
	debugger;
    let rightDepth = maxDepth(root.right);
	debugger;
    return 1 + Math.max(leftDepth, rightDepth)
};

console.log(maxDepth(tree))