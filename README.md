# 256! A 2048 Clone.

## Summary

This is a clone of the game [2048](http://gabrielecirulli.github.io/2048/).

Just like 2048, use keyboard commands to choose the direction you'd like to slide the blocks on the grid. Matching numbers merge, and after each turn, a 2 or a 4 is randomly generated in one of the unoccupied spaces. Keep merging numbers in order to avoid running out of space and losing!

See below for a look at the game in action:
![256! Screenshot](images/256_screeenshot.png?raw=true)




## In Progress

* Currently, if you input a direction that would not result in the movement of any number, the game will still generate a number in a random spot as if you had made a normal turn. The game needs to recognize when an input does not result in movement and prevent the generation of a number. 

* Currently, the game does not detect when you lose. It needs to stop gameplay when appropriate and alert the user that they have lost

* There is currently no scoring system in the game.

* I would like to add some animations to the game so that the movement and merging of numbers is smoother.

* I would like to deploy this app using an AWS EC2 instance.




created by @tony-rodriguez and @dgonca
