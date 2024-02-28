// Given the root of a binary tree, return the leftmost value in the last row of the tree.

var findBottomLeftValue = function(root) {
    const queue=[root]
    let leftmost=root.val
       while(queue.length){
           const size = queue.length
           leftmost=queue[0].val
        for(let i=0;i<size;i++){
            let node=queue.shift()
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
       }
       return leftmost
};