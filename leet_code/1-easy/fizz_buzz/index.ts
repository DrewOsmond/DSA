// function fizzBuzz(n: number): string[] {
//   const arr: string[] = [];
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       arr.push(i % 15 === 0 ? "FizzBuzz" : i % 3 === 0 ? "Fizz" : "Buzz");
//     } else {
//       arr.push(`${i}`);
//     }
//   }
//   return arr;
// }

function fizzBuzz(n: number): string[] {
  const arr: string[] = [];
  for (let i = 1; i <= n; i++) {
    arr.push(
      i % 5 === 0 || i % 3 === 0
        ? i % 15 === 0
          ? "FizzBuzz"
          : i % 3 === 0
          ? "Fizz"
          : "Buzz"
        : `${i}`
    );
  }
  return arr;
}
