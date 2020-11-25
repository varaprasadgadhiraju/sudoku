//This is a program which solves n*n board
//firstly we have to find out the possible values in rol,col and subgrid
//we take a func, and iterate a loop to guess the possible values
function possibles(sudoku,row,col,guess) { 
  let lens=sudoku.length 
    for(let i=0;i<lens;++i) { // checks if the value of 'guess' can be updated in the row
        if(sudoku[row][i]==guess) {
            return false
        }
    }
    for(let j=0;j<lens;++j) { // checks if the value of 'guess' can be updated in the col
        if(sudoku[j][col]==guess) {
            return false
        }
    }
    let s=Math.sqrt(lens) //to find the size of the subgrid
    let row_start=Math.floor(row/s)*s // these lines checks the start point of subgrids of row and col
    let col_start=Math.floor(col/s)*s
    for(let r=row_start;r<row_start+(s-1);++r) { //these line checks the end of each subgrid
        for(let c=col_start;c<col_start+(s-1);++c) {
            if(sudoku[r][c]==guess) {
                return false //if values already exists returns false
            }
        }
    }
    return true  //if possible values can be updated returns true
}
function sudokoSolver(sudoku) {
  let lens=sudoku.length
    for (let i = 0; i < lens; i++) { //checks for row
      for (let j = 0; j < lens; j++) { //checks for col
        if (sudoku[i][j] == '.') {  //if empty, we will update with guess values
          for (let k = 1; k <= lens; k++) { //we give guess values from 1 to 9
            if (possibles(sudoku, i, j, k)) { //calls the func and enters if func returns true
              sudoku[i][j] = k; //sets the possible value in sudoku
            if (sudokoSolver(sudoku)) { //calls the func and updates the new sudoku 
                                        //this recursion continues until the sudoku is solved
             return true; //if sudoku is solved
            } else {
             sudoku[i][j] = '.'; //backtracks the value if it cant be updated
            }
           }
         }
         return false; // unsolved board
       }
     }
   }
   return true; //if entire board is solved
  }

sudoku=[
  ['9', '9', '.', '.', '4', '2', '1', '3', '6'],
  ['.', '.', '.', '9', '6', '.', '4', '8', '5'],
  ['.', '.', '.', '5', '8', '1', '.', '.', '.'],
  ['.', '.', '4', '.', '.', '.', '.', '.', '.'],
  ['5', '1', '7', '2', '.', '.', '9', '.', '.'],
  ['6', '.', '2', '.', '.', '.', '3', '7', '.'],
  ['1', '.', '.', '8', '.', '4', '.', '2', '.'],
  ['7', '.', '6', '.', '.', '.', '8', '1', '.'],
  ['3', '.', '.', '.', '9', '.', '.', '.', '.'],
   
];
console.log(sudokoSolver(sudoku))
console.log(sudoku)