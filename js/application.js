$(document).ready(function() {
  var game = new Game();
  console.log(game.board);
  var game2 = new Game('0000000020000200');
  console.log(game2.board);
});
