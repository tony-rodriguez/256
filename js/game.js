var sample = function(array){
  return array[Math.floor(Math.random()*array.length)];
}

function isZero(element, index, array) {
  return element === '0';
}

var hasValidPath  = function(path){
  if (path.length === 0) {
    return true;
  } else if (path.every(isZero)) {
    return true;
  }else {
    return false;
  }
}


String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

var orderedSlices = function(direction, splitBoard){
  var firstSlice = [];
  var secondSlice = [];
  var thirdSlice = [];
  var fourthSlice = [];
  if (direction === 'left' || direction === 'right'){
    for(var i=0; i < splitBoard.length; i++){
      if (i < 4) {
        firstSlice.push(splitBoard[i]);
      }else if (i < 8) {
        secondSlice.push(splitBoard[i]);
      }else if (i < 12) {
        thirdSlice.push(splitBoard[i]);
      }else if (i < 16) {
        fourthSlice.push(splitBoard[i]);
      }
    }
    if (direction === 'left') {
      return [firstSlice, secondSlice, thirdSlice, fourthSlice];
    } else {
      return [firstSlice.reverse(), secondSlice.reverse(), thirdSlice.reverse(), fourthSlice.reverse()];
    }

  }else if (direction === 'up' || direction === 'down'){
    for(var i=0; i < splitBoard.length; i++){
      if (i % 4 === 0) {
        firstSlice.push(splitBoard[i]);
      }else if (i % 4 === 1) {
        secondSlice.push(splitBoard[i]);
      }else if (i % 4 === 2) {
        thirdSlice.push(splitBoard[i]);
      }else if (i % 4 === 3) {
        fourthSlice.push(splitBoard[i]);
      }
    }
    if (direction === 'up') {
      return [firstSlice, secondSlice, thirdSlice, fourthSlice];
    } else {
      return [firstSlice.reverse(), secondSlice.reverse(), thirdSlice.reverse(), fourthSlice.reverse()];
    }
  }else {
    return "Invalid Direction"
  }
}

var moveTilesInASlice = function(slice){
  //4 tiles in a slice
  //if any tile is zero, skip it
  //for the first tile, always skip (its always up against a wall)
  //for the second tile:
  //if first tile is zero, move 2nd tile to 1st index
  //change 2nd index to zero then
  //if first tile is equal to 2nd tile, add 2nd tile to 1st tile
  //change 2nd index to zero
  //if first tile is not equal to 2nd tile (and not zero), don't move 2nd tile
  //continue for 3rd tile and 4th tile
  var mergedIndexes = []
  for(var currentI = 1; currentI < slice.length; currentI++){
    if (slice[currentI] !== '0'){
      for(var previousI = currentI - 1; previousI > -1; previousI--){
        if (slice[previousI] !== '0' && hasValidPath(slice.slice(previousI + 1, currentI))){
          if (slice[previousI] === slice[currentI] && !mergedIndexes.includes(previousI)){
            var mergedNumber = (parseInt(slice[previousI])*2).toString();
            slice[previousI] = mergedNumber;
            slice[currentI] = '0';
            mergedIndexes.push(previousI);
          }
        } else if (slice[previousI] === '0'){
          slice[previousI] = slice[currentI];
          slice[currentI] = '0';
          currentI--;
        }
      }
    }
  }
  return slice;
}

var rejoinBoard = function(direction, slicedBoard) {
  var result = [];
  if (direction === 'left' || direction === 'right'){
    for(var i = 0; i < slicedBoard.length; i++){
      if(direction ==='right') {
        result = result.concat(slicedBoard[i].reverse());
      } else {
        result = result.concat(slicedBoard[i]);
      }
    }
  } else {
      if(direction === 'down'){
        for (var n = 0; n < slicedBoard.length; n++){
          slicedBoard[n] = slicedBoard[n].reverse();
        }
      }
      for(var i = 0; i < slicedBoard.length; i++){
        for(var j = 0; j < slicedBoard[i].length; j++){
            result.push(slicedBoard[j][i]);
        }
     }
  }
  return result;
}

var generateRandomBoard = function(){
  var zeroBoard = '0000000000000000';
  var randomStarts = ['2', '4'];
  for(var i = 0; i < 2; i++){
    var index = Math.floor(Math.random()*zeroBoard.length);
    if (zeroBoard.charAt(index) === '0') {
     zeroBoard = zeroBoard.replaceAt(index, sample(randomStarts));
    } else {
      i--;
    }
  }
  return zeroBoard;
}

var findAllZeroes = function(board){
  var allZeroes = []
  for(var i = 0; i < board.length; i++){
    if (board[i] === '0'){
      allZeroes.push(i);
    }
  }

  return allZeroes;
}

var spawnRandomNum = function(board){
  var allZeroes = findAllZeroes(board);

  if (allZeroes.length > 0){
    var randomIndex = sample(allZeroes);
    var randomStarts = ['2', '4'];
    board[randomIndex] = sample(randomStarts);
  }
  return board;
}

var winner = false;
var loser = false;

var gameWin = function(board){
  for(var i = 0; i < board.length; i++){
    if (board[i] === '256'){
      winner = true;
    }
  }
}

var gameLose = function(board){
  if (!gameWon){
    if (findAllZeroes(board).length === 0){
      loser = true;
    }
  }
}

var checkGameStatus = function(board){
  if(gameWin === true && gameLose === false){
    alert('You won the game!');
  } else if (gameLose === true && gameWin === false){
    alert('Sorry you lost, please restart');
  } 
}


//////////////////////////////////////////// GAME FUNCTIONS BELOW

var Game = function(stringBoard){
  this.stringBoard = stringBoard || generateRandomBoard();
  this.board = this.stringBoard.split('');
}

Game.prototype.toString = function(){
  return this.board.slice(0, 4).join('') + "\n" + this.board.slice(4, 8).join('') + "\n" + this.board.slice(8, 12).join('') + "\n" + this.board.slice(12, 16).join('')
};

Game.prototype.move = function(direction){
  var slicedBoard = orderedSlices(direction, this.board);
  for(var i = 0; i < slicedBoard.length; i++){
    slicedBoard[i] = moveTilesInASlice(slicedBoard[i]);
  }
  this.board = rejoinBoard(direction, slicedBoard);
  this.board = spawnRandomNum(this.board);
  checkGameStatus(this.board);
  return this.toString();
}



