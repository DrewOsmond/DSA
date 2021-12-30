function searchMatrix(matrix: number[][], target: number): boolean {
  for (let i = 0; i < matrix.length; i++) {
    const firstVal: number = matrix[i][0];
    const lastVal: number = matrix[i][matrix[i].length - 1];

    if (firstVal === target || lastVal === target) {
      return true;
    } else if (firstVal < target && lastVal > target) {
      return matrix[i].indexOf(target) > -1;
    }
  }

  return false;
}
