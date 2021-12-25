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

  return true;
}

function checkRow(row: string[]): boolean {
  const checkedNumbers = new Set();
  const set = new Set();
  //loop through each row and make sure it's valid
}

function checkColumn(board: string[][], columnIdx: number): boolean {
  //loop through each column and make sure it's valid
}

//example
// Input: board =
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true
