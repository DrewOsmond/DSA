function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  const startingColor: number = image[sr][sc];
  const stack: [number, number][] = [[sr, sc]];

  if (color === startingColor) return image;

  while (stack.length > 0) {
    const [x, y]: [number, number] = stack.pop()!;
    if (image[x] && image[x][y] !== undefined) {
      const pixel = image[x][y];
      if (pixel === startingColor) {
        image[x][y] = color;
        stack.push([x - 1, y]);
        stack.push([x + 1, y]);
        stack.push([x, y - 1]);
        stack.push([x, y + 1]);
      }
    }
  }
  return image;
}
