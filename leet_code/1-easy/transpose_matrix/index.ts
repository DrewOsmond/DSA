function transpose(matrix: number[][]): number[][] {
  const newMatrix: number[][] = [];
  const rowLength: number = matrix[0].length;
  for (let col: number = 0; col < rowLength; col++) {
    const newRow: number[] = [];
    for (let row: number = 0; row < matrix.length; row++) {
      newRow.push(matrix[row][col]);
    }
    newMatrix.push(newRow);
  }

  return newMatrix;
}
