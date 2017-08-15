var bgColorForNum = function(square, game){
  if (game.board[square] === '2'){
    $('#' + square).css('background-color', '#e8ba32')
  } else if (game.board[square] === '4'){
    $('#' + square).css('background-color', '#d6a30c')
  } else if (game.board[square] === '8'){
    $('#' + square).css('background-color', '#997409')
  } else if (game.board[square] === '16'){
    $('#' + square).css('background-color', '#d17a30')   
  } else if (game.board[square] === '32'){
    $('#' + square).css('background-color', '#cc6104')    
  } else if (game.board[square] === '64'){
    $('#' + square).css('background-color', '#a35309')    
  } else if (game.board[square] === '128'){
    $('#' + square).css('background-color', '#a23908')    
  } else if (game.board[square] === '256'){
    $('#' + square).css('background-color', '#d14f12')    
  } else if (game.board[square] === '0'){
    $('#' + square).css('background-color', '#c2c9d6')    
  }
}

var reloadTableValues = function(game) {
  for(var i = 0; i < game.board.length; i++){
    if (game.board[i] !== '0') {
      $('#' + i).text(game.board[i]);
    } else if (game.board[i] === '0'){
      $('#' + i).text('');
    }
    bgColorForNum(i, game);
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
