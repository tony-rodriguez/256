var reloadTableValues = function(game) {
  for(var i = 0; i < game.board.length; i++){
    $('#' + i).text(game.board[i]);
  };
}

$(document).ready(function() {


  var game = new Game();
  reloadTableValues(game);
  $(document).on('keyup', function(e) {
    if (e.keyCode === 37) {
      game.move('left');
      reloadTableValues(game);
    }else if(e.keyCode === 38) {
      game.move('up');
      reloadTableValues(game);
    }else if(e.keyCode === 39) {
      game.move('right');
      reloadTableValues(game);
    }else if(e.keyCode === 40) {
      game.move('down');
      reloadTableValues(game);
    }
  })
  $(".restart-button").on('click', function() {
    location.reload();
  })

});
