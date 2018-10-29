PROJECT 01:
-- DRIP FLIP BRICK SKIP SICK

LINK TO DEPLOYED GAME:
-- tacit-north.surge.sh

WIREFRAME:
![WIREFRAME1](/project1/wireframe/original wireframe.jpg)
![WIREFRAME2](/project1/wireframe/remastered wireframe.jpg)
-- original wireframe, was the initial proposal for the game.
-- remaster wireframe, was the the wireframe used to build the game.

DESCRIPTION:
-- The game built is inspired by Rock, Paper, Scissors. DRIP FLIP BRICK SKIP SICK, is a modern
iteration of the classic game. With an interest in sneaker culture, I replaced the original three
elements with 5 sneaker brands I enjoy wearing. Nike, Adidas, Asics, New Balance, and Jordan.
Each sneaker brand can beat two other brands, as explained in the spec below.

SPECS:
1) Screen appears, score board on top, replay on bottom
-- there are 5 brands/sneakers displayed in the middle;
-- Player 1 is the user, and will face off against the computer.
2) Player 1 clicks one of the five images shown on the screen
-- When player 1 hovers over one of the elements, it will show what it can beat.
3) Winning Conditions
  -- [Nike beats Adidas and Jordan]
  -- [Adidas beats Asics and New Balance]
  -- [Asics beats Nike and Jordan]
  -- [New Balance beats Nike and Asics]
  -- [Jordan beats Adidas and New Balance]
4) Tie/Continue Conditions
-- if both players choose same image, replay
-- keep on playing until tie breaks and winner is declared
5) When a player wins two things happen
  -- a. logs 1 point onto the score board
6) When either player gets up to 10 points;  
  -- winner is declared
7) Game is reset when replay button is pressed.

APPROACH:
-- When initially working on this game, HTML was the first step to lay the foundation.
-- Secondly minor CSS was written to give easy way to understand where goes what.
-- Javascript was heavily written to build the game logic and features.
-- CSS was continued after finishing the logic.  

Overall the week was successful, a challenging part during project week was inserting the player1's sneaker and the computer's choice into the playerzone. Minor challenges were figuring out to do the hovering over the sneakers. Initially I wanted to have the sneaker point arrows to which sneaker brand
it could beat or fade away the sneakers it couldn't beat and leave the ones it could beat, glowing.
I also wanted, when you clicked an element, there would be a dramatic entrance into the playerZone, and the sneaker brand choices would fade away.
