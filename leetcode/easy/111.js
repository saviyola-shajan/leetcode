// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.
var minDepth = function(root) {
    if(!root){
        return 0
    }
        if(!root.left&&!root.right){
            return 1
        }
    if(!root.left){
     return minDepth(root.right)+1
    }
    if(!root.right){
        return minDepth(root.left)+1
    }
    return Math.min(minDepth(root.left),minDepth(root.right))+1
 };