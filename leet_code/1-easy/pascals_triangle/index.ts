function generate(numRows: number): number[][] {
  const triangle: number[][] = [[1]];
  //while loop to build each level of the triangle. We will do 1 loop less than numRows because we are giving triangle the first level by default.
  while (numRows > 1) {
    //loop through the lowest level of the tirnalge, and add up the left and right values.
    //push them into the next triangle leve, then push that into the returned triangle
    const nextTriangleLevel: number[] = [1];
    const prevTriangleLevel: number[] = triangle[triangle.length - 1];
    const triangleLength: number = prevTriangleLevel.length;
    for (let i = 0; i < triangleLength; i++) {
      const left: number = prevTriangleLevel[i] || 0;
      const right: number = prevTriangleLevel[i + 1] || 0;

      nextTriangleLevel.push(left + right);
    }
    triangle.push(nextTriangleLevel);
    numRows--;
  }
  return triangle;
}

const input: number = 5;

console.log(generate(input));
