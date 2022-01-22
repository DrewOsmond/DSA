function getRow(rowIndex: number): number[] {
  let pascalsTriangle: [number[]] = [[1]];

  while (pascalsTriangle.length <= rowIndex) {
    pascalsTriangle.push(buildRow(pascalsTriangle[pascalsTriangle.length - 1]));
  }

  console.log(pascalsTriangle);
  return pascalsTriangle[rowIndex];
}

function buildRow(triangle: number[]): number[] {
  const newLayer: number[] = [];

  for (let i = 0; i <= triangle.length; i++) {
    const curr: number = triangle[i] ? triangle[i] : 0;
    const prev: number = triangle[i - 1] ? triangle[i - 1] : 0;

    newLayer.push(curr + prev);
  }

  return newLayer;
}

console.log(getRow(3));
