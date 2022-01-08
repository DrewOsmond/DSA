import { TreeNode } from "../../abstract_data_types";

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null;

  let leftHolder = root.left;
  root.left = root.right;
  root.right = leftHolder;
  invertTree(root.left);
  invertTree(root.right);

  return root;
}

console.log(invertTree);
