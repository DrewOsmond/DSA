import { TreeNode } from "../../abstract_data_types";

function isValidBST(root: TreeNode | null): boolean {
  const orderedValues = inOrderTree(root);

  for (let i = 0; i < orderedValues.length; i++) {
    let curr = orderedValues[i];
    let next = orderedValues[i + 1];
    if (curr >= next) {
      return false;
    }
  }

  return true;
}

function inOrderTree(root: TreeNode | null): Array<number> {
  if (!root) return [];

  return [...inOrderTree(root.left), root.val, ...inOrderTree(root.right)];
}
