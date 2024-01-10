// Given the root of a binary tree, return the preorder traversal of its nodes' values.

var preorderTraversal = function(root) {
    const res=[]
    const traverse=function(root){
        if(root){
            res.push(root.val)
            traverse(root.left)
            traverse(root.right)
        }
    }
    traverse(root)
    return res
};