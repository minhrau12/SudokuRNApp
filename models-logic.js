import {_} from 'lodash';

//logic render for block
//9x9
//unique rows,unique columns, unique blocks
//naive solution:
class Sudoku {
    sudoku = [
        0,0,0, 0,0,0, 0,0,0,
        0,0,0, 0,0,0, 0,0,0,
        0,0,0, 0,0,0, 0,0,0,

        0,0,0, 0,0,0, 0,0,0,
        0,0,0, 0,0,0, 0,0,0,
        0,0,0, 0,0,0, 0,0,0,

        0,0,0, 0,0,0, 0,0,0,
        0,0,0, 0,0,0, 0,0,0,
        0,0,0, 0,0,0, 0,0,0];

    rightSeq = [1,2,3,4,5,6,7,8,9];

    //return row of a cell
    returnRow = (cell) => {
        return Math.floor(cell/9);
    };

    //return col of a cell
    returnCol = (cell) => {
        return cell % 9;
    };

    //return block of a cell
    returnBlock = (cell) => {
        return Math.floor(this.returnRow(cell) / 3) * 3 + Math.floor(this.returnCol(cell) / 3);
    };

    //check if a number can be placed into that row in sudoku
    checkPosibleRow = (number,row,sudoku) =>{
        for (let col = 0;col < 9;col++) {
            if (sudoku[row*9 + col] === number) {
                return false;
            }
        }
        return true;
    };

    //check if a number can be placed into that col in sudoku
    checkPossibleCol = (number,col,sudoku) => {
        for(let row = 0;row < 9;row++) {
            if(sudoku[col + 9*row] === number) {
                return false;
            }
        }
        return true;
    };

    //check if a number can be placed into that block in sudoku
    checkPossibleBlock = (number,block,sudoku) => {
        for (let i =0;i < 9;i++) {
            if(sudoku[Math.floor(block/3)*27 + i%3 + 9*Math.floor(i/3) + 3*(block%3)] === number) {
                return false;
            }
        }
        return true;
    };

    //check if a number can be placed in a cell
    checkPossibleNumber = (cell,number,sudoku) => {
        var row = this.returnRow(cell);
        var col = this.returnCol(cell);
        var block = this.returnBlock(cell);
        return this.checkPosibleRow(number,row,sudoku) && this.checkPossibleCol(number,col,sudoku) && this.checkPossibleBlock(number,block,sudoku);
    };

    //check if that row is complete
    checkCompleteRow = (row,sudoku) => {
        let testRow = [];
        for (let i =0;i < 9;i++) {
            testRow[i].push(sudoku[row*9 + i]);
        }
        return testRow.sort().join() === this.rightSeq.join();
    };

    //check if that col is complete
    checkCompleteCol = (col,sudoku) => {
        let testCol = [];
        for(let i =0;i < 9;i++) {
            testCol[i].push(sudoku[col + i*9]);
        }
        return testCol.sort().join() === this.rightSeq.join();
    };

    //check if that block is complete
    checkCompleteBlock = (block,sudoku) => {
        let testBlock = [];
        for(let i =0;i < 9;i++) {
            testBlock[i].push(sudoku[Math.floor(block/3)*27 + i%3 + 9*Math.floor(i/3) + 3*(block%3)]);
        }
        return testBlock.sort().join() === this.rightSeq.join();
    };

    //check if a sudoku is complete
    checkCompleteSudoku = (sudoku) => {
        for (let i =0;i < 9;i++) {
            if(!this.checkPosibleRow(i,sudoku) || !this.checkPossibleCol(i,sudoku) || this.checkPossibleBlock(i,sudoku)) {
                return false;
            }
        }
        return true;
    };

    //return array with all possible values in a cell
    possibleValue = (cell,sudoku) => {
        let possible = [];
        for(let i = 1;i <= 9;i++) {
            if(this.checkPossibleNumber(cell,i,sudoku)) {
                possible.push(i);
            }
        }
        return possible;
    };

    //return random value picked from array of possible values
    randomPossibleValue = (possible,cell) => {
        let randomPicked = Math.floor(Math.random() * possible[cell].length);
        return position[cell][randomPicked];
    };

    //scan sudoku for unique
    scanSudoku = (sudoku) => {
        let possible = [];
        for(let i =0;i < 81;i++) {
            if(sudoku[i] === 0){
                possible[i] = [];
                possible[i] = this.possibleValue(i,sudoku);
                if(possible[i].length === 0) {
                    return false;
                }
            }
        }
        return possible;
    };

    //remove attempt
    removeAttempt = (attemptArray,number) => {
        let newArray = [];
        for (let i =0;i < attemptArray.length;i++) {
            if(attemptArray[i] !== number) {
                newArray.push(attemptArray[i]);
            }
        }
    };

    //return index of a cell where there are less possible number
    nextRandom = (possible) => {
        let max = 9;
        let minChoice = 0;
        for(let i =0;i < 81;i++) {
            if (possible[i]!== undefined) {
                if ((possible[i].length <= max) && (possible[i].length > 0)) {
                    max = possible[i].length;
                    minChoice = i;
                }
            }
        }
        return minChoice;
    };

    //solve a sudoku
    solve = (sudoku) => {
        let saved = [];
        let savedSudoku = [];
        let i=0;
        let nextMove;
        let whatToTry;
        let attempt;
        while (!this.checkCompleteSudoku(sudoku)) {
            i++;
            nextMove = this.scanSudoku(sudoku);
            if (nextMove === false) {
                nextMove = saved.pop();
                sudoku = savedSudoku.pop();
            }
            whatToTry = this.nextRandom(nextMove);
            attempt = this.randomPossibleValue(nextMove,whatToTry);
            if (nextMove[whatToTry].length > 1) {
                nextMove[whatToTry] = this.removeAttempt(nextMove[whatToTry],attempt);
                saved.push(nextMove.slice());
                savedSudoku.push(sudoku.slice());
            }
            sudoku[whatToTry] = attempt;
        }
        return sudoku;
    };
}
const sdk = new Sudoku();
export default sdk;









