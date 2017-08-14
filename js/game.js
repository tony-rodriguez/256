var sample = function(array){
  return array[Math.floor(Math.random()*array.length)];
}

String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
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
  //0, 1, 2, 3
  var mergedIndexes = []
  for(var currentI = 1; currentI < slice.length; currentI++){
    // 1, 2, 3
    console.log("tilenum: " + slice[currentI]);
    if (slice[currentI] !== '0'){
      //lets see if we can move the tile
      for(var previousI = currentI - 1; previousI > -1; previousI--){
        //0, 1, 2
        console.log("previous tilenum: " + slice[previousI])
        if (slice[previousI] !== '0'){
          if (slice[previousI] === slice[currentI] && !mergedIndexes.includes(previousI)){
            var mergedNumber = (parseInt(slice[previousI])*2).toString();
            slice[previousI] = mergedNumber;
            slice[currentI] = '0';
            mergedIndexes.push(previousI);
            console.log("slice: " + slice);
          }
        } else if (slice[previousI] === '0'){
          slice[previousI] = slice[currentI];
          slice[currentI] = '0';
          console.log("slice: " + slice);
          currentI--;
        }
      }
    }
  }
  return slice;
}



// var strSample = function(string){
//   return string.charAt(Math.floor(Math.random()*string.length));
// }

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


//////////////////////////////////////////// GAME FUNCTIONS BELOW

var Game = function(stringBoard){
  this.stringBoard = stringBoard || generateRandomBoard();
  this.board = this.stringBoard.split('');
}

Game.prototype.toString = function(){
  return this.board.slice(0, 4) + "\n" + this.board.slice(4, 8) + "\n" + this.board.slice(8, 12) + "\n" + this.board.slice(12, 16)
};

Game.prototype.move = function(direction){
  var slicedBoard = orderedSlices(direction, this.board);
}



