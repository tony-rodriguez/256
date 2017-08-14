var sample = function(array){
  return array[Math.floor(Math.random()*array.length)];
}

String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
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

var Game = function(board){
  this.board = board || generateRandomBoard();
}

Game.prototype.toString = function(){
  return this.board.slice(0, 4) + "\n" + this.board.slice(4, 8) + "\n" + this.board.slice(8, 12) + "\n" + this.board.slice(12, 16)
}
