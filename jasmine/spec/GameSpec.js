describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
    game2 = new Game('0000000020000200');
  });

  it("generates a random starting board as a string if none is given", function() {
    expect(game.board).toEqual(jasmine.any(String));
  });

  it("generates a random starting board with a length of 16 if none is given", function() {
    expect(game.board.length).toEqual(16);
  });

  it("takes in a starting board if one is given", function() {
    expect(game2.board).toEqual('0000000020000200');
  });

  // describe("when song has been paused", function() {
  //   beforeEach(function() {
  //     player.play(song);
  //     player.pause();
  //   });

  //   it("should indicate that the song is currently paused", function() {
  //     expect(player.isPlaying).toBeFalsy();

  //     // demonstrates use of 'not' with a custom matcher
  //     expect(player).not.toBePlaying(song);
  //   });

  //   it("should be possible to resume", function() {
  //     player.resume();
  //     expect(player.isPlaying).toBeTruthy();
  //     expect(player.currentlyPlayingSong).toEqual(song);
  //   });
  // });

  // // demonstrates use of spies to intercept and test method calls
  // it("tells the current song if the user has made it a favorite", function() {
  //   spyOn(song, 'persistFavoriteStatus');

  //   player.play(song);
  //   player.makeFavorite();

  //   expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  // });

  // //demonstrates use of expected exceptions
  // describe("#resume", function() {
  //   it("should throw an exception if song is already playing", function() {
  //     player.play(song);

  //     expect(function() {
  //       player.resume();
  //     }).toThrowError("song is already playing");
    // });
  // });
});
