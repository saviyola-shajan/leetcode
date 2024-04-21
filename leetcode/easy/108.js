// Given an integer array nums where the elements are sorted in ascending order, convert it to a 
// height-balanced binary search tree.

var sortedArrayToBST = function (nums) {
    if (!nums.length) return null
    const mid = Math.floor(nums.length / 2)
    const root = new TreeNode(nums[mid])
    root.left = sortedArrayToBST(nums.slice(0, mid))
    root.right = sortedArrayToBST(nums.slice(mid + 1))
    return root
};