// currently can't find a solution 
function solve(grid, width, height) {
  
    let twoDimensionalGrid = []
  
    for (let i = 0, k = -1; i < grid.length; i++) {
      if (i % width === 0) {
        k++;
        twoDimensionalGrid[k] = [];
      }
  
      twoDimensionalGrid[k].push(grid[i]);
    }
  
    for (let i = 0; i < twoDimensionalGrid.length; i++) {
      for (let j = 0; j < twoDimensionalGrid[i].length; j++) {
        if (i === 0 || i === height - 1) {
          if (twoDimensionalGrid[i][j] === 0) {
            if (twoDimensionalGrid[i].indexOf(1) < j && twoDimensionalGrid[i].lastIndexOf(1) > j && twoDimensionalGrid[i].indexOf(1) != twoDimensionalGrid[i].lastIndexOf(1)) {
              twoDimensionalGrid[i][j] = '*';
              continue;
            } else {
              twoDimensionalGrid[i][j] = ' ';
              continue;
            }
          } else {
            twoDimensionalGrid[i][j] = '+';
            continue;
          }
        }
        if (j != 0 && twoDimensionalGrid[i-1][j] !== ' ' && twoDimensionalGrid[i][j] !== 1 && twoDimensionalGrid[i][j-1] !== ' ' && twoDimensionalGrid[i].indexOf('+') !== -1 && twoDimensionalGrid[i].indexOf('+') < j && twoDimensionalGrid[i].lastIndexOf(1) > j) {
          let tempArr = [];
          for (let k = 0; k < height; k++) {
            tempArr.push(twoDimensionalGrid[k][j])
          }
          if (tempArr.indexOf('+') !== -1 && tempArr.indexOf('+')  <  i && tempArr.lastIndexOf(1) > i) {
            twoDimensionalGrid[i][j] = '*';
          } else {
          twoDimensionalGrid[i][j] = ' ';
          
          }
  
        } else if (twoDimensionalGrid[i][j] === 1) {
          twoDimensionalGrid[i][j] = '+';
        } else {
          twoDimensionalGrid[i][j] = ' ';
          if (twoDimensionalGrid[i][j-1] === '*') {
            twoDimensionalGrid[i][j-1] = ' ';
            }
        }
  
      }
    }
    let str='';
    for ( let i = 0; i < twoDimensionalGrid.length; i++) {
    if(i != height -1 ) {
    twoDimensionalGrid[i].push('\n');
    }
    for (let j = 0; j < twoDimensionalGrid[i].length; j++) {
    str += twoDimensionalGrid[i][j];
    }
    }
    return str;
  }



 