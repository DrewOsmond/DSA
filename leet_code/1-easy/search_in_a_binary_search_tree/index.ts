import { TreeNode } from "../../abstract_data_types";

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) return null;
  if (root.val === val) return root;
  const subTree = val > root.val ? root.right : root.left;
  return searchBST(subTree, val);
}

console.log(searchBST);
