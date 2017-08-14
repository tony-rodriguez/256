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

  describe("#orderedSlices", function(){
    var unorderedGame;
    var slices;
    beforeEach(function(){
       unorderedGame = new Game('2224245231427890');
      slices = orderedSlices('right', unorderedGame.board);
    });
    it("generates an array of 4 arrays", function(){
      expect(slices.length).toEqual(4);
    });
    it("generates an array of arrays in the ordered needed for the direction inputed (always going from left to right)", function(){
      expect(slices[0]).toEqual(['4', '2', '2', '2']);
    });
  });

  describe("#moveTilesInASlice", function(){
    it("moves a number across empty spaces (0)", function(){
      var testSlice = ['0', '0', '0', '2'];
      expect(moveTilesInASlice(testSlice)).toEqual(['2', '0', '0', '0']);
    });
    it("merges matching numbers in a slice", function(){
      var testSlice = ['2', '0', '2', '0'];
      expect(moveTilesInASlice(testSlice)).toEqual(['4', '0', '0', '0']);
    });
    it("doesn't merge a number twice if the previous index has already been merged.", function(){
      var testSlice = ['2', '2', '0', '4'];
      expect(moveTilesInASlice(testSlice)).toEqual(['4', '4', '0', '0']);
    });
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
