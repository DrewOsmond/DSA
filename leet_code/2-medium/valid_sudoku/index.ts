//check and see if a sudoku is a valid sudoku

/* 
plan:
    loop through the rows and collumns to make sure those are valid,
    then break the board into the 3x3 board 
    check to make sure each inner board is also correct
*/

function isValidSudoku(board: string[][]): boolean {
  for (let row of board) {
    const validRow = checkRow(row);
    if (!validRow) {
      return false;
    }
  }

  for (let i = 0; i < 9; i++) {
    const validColumn = checkColumn(board, i);
    if (!validColumn) {
      return false;
    }
  }

  const seperatedBoards: string[][][] = seperateBoards([
    board.slice(0, 3),
    board.slice(3, 6),
    board.slice(6, 9),
  ]);

  for (let board of seperatedBoards) {
    const validBoard = checkInnerBoard(board);
    if (!validBoard) {
      return false;
    }
  }

  return true;
}

function checkRow(row: string[]): boolean {
  //a Set of all checked numbers, no number should appear twice!
  const checkedNumbers = new Set();
  //loop through each row and make sure it's valid
  for (let num of row) {
    //check and see if the number has been spotted in the row
    //if it has, return false. Otherwise add it to the checkedNumbers
    if (num !== "." && checkedNumbers.has(num)) {
      return false;
    } else {
      checkedNumbers.add(num);
    }
  }

  //return true if no falsy value is found.
  return true;
}

function checkColumn(board: string[][], columnIdx: number): boolean {
  //a Set of all checked numbers, no number should appear twice!
  const checkedNumbers = new Set();
  //loop through each column and make sure it's valid
  for (let i = 0; i < 9; i++) {
    //check and see if the number has been spotted in the column
    //if it has, return false. Otherwise add it to the checkedNumbers
    const columnNumber = board[i][columnIdx];
    if (columnNumber !== "." && checkedNumbers.has(columnNumber)) {
      return false;
    } else {
      checkedNumbers.add(columnNumber);
    }
  }
  //return true if no falsy value is found.
  return true;
}

function seperateBoards([top, mid, bot]: string[][][]): string[][][] {
  //final array we will return that is a 3D array,
  //with each inner array being a 2d array of each inner board
  const boards: string[][][] = [];

  //call seperateRows on each layer of the overall board
  boards.push(...seperateRows(top));
  boards.push(...seperateRows(mid));
  boards.push(...seperateRows(bot));

  return boards;
}

function seperateRows(b: string[][]): string[][][] {
  //seperate the left, middle, and right boards for each row
  const left: string[][] = [];
  const middle: string[][] = [];
  const right: string[][] = [];
  //loop through each row and seperate each inner board into left, middle, and right.
  for (let i = 0; i < 3; i++) {
    const row = b[i];
    left.push(row.slice(0, 3));
    middle.push(row.slice(3, 6));
    right.push(row.slice(6, 9));
  }
  //retun an array of each board seperated
  return [left, right, middle];
}

function checkInnerBoard(board: string[][]): boolean {
  //keep a list of all added numbers, no number should appear twice
  const checkedNumbers = new Set();
  //loop through the board and grab each row
  for (let row of board) {
    //loop through each number inside the row and check for unique values
    for (let num of row) {
      if (num !== "." && checkedNumbers.has(num)) {
        //return false if number has been seen before
        return false;
      } else {
        checkedNumbers.add(num);
      }
    }
  }

  //return true if there is no dupe number found.
  return true;
}

//example
// Input:
const board: string[][] = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(board));
// Output: true
