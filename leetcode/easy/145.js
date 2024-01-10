// Given the root of a binary tree, return the postorder traversal of its nodes' values.

var postorderTraversal = function(root) {
    const arr=[]
    const postOrder=function(root){
        if(root){
            postOrder(root.left)
            postOrder(root.right)
            arr.push(root.val)
        }
    }
    postOrder(root)
    return arr
};