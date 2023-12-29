
// Given the root of a binary tree, return the inorder traversal of its nodes' values.
var inorderTraversal = function(root) { 
    let result=[]
    const traverse= function(root){
        if(root){
        traverse(root.left)
        result.push(root.val)
        traverse(root.right)
        }
    }
    traverse(root)
    return result
   }