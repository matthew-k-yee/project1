const player1Score = 0;
const player2Score = 0;

const nike = document.getElementById('box1');
const adidas = document.getElementById('box2');
const reebok = document.getElementById('box3');
const newBalance = document.getElementById('box4');
const jordan = document.getElementById('box5');

let scoreBox = document.querySelector('.scorebox');
let score1 = document.getElementsByClassName('player1Score');
let score2 = document.getElementsByClassName('player2Score');

//win logic
//nike beats adidas and Jordan
//adidas beats new balance and Reebok
//reebok beats nike and Jordan
//new balance beats nike and Reebok
//jordan beats new balance and adidas

function player1Choice(user) {
  console.log('user chooses ' + user)
}

function player2Choice() {
  let choices = ['nike', 'adidas', 'reebok', 'new balance', 'jordan'];
  let random = Math.floor(Math.random() * 5)
  return choices[random]
}
player2Choice();

function game() {

}



//lose logic

//tie logic
// if both users choose same element
//-- play again
// if both users don't choose element with winning formula
//-- do it again

// function draw (player1Choice, player2Choice) {
//   if (player1Choice === player2Choice)
//     return `It's a tie`
// } else if (   ) {
//     return `Try again`
// } else {
//
// }
//
// draw();


//function clicks
function action() {
  nike.addEventListener('click', function(){
    player1Choice('nike');
  });
  adidas.addEventListener('click', function(){
    player1Choice('adidas');
  });
  reebok.addEventListener('click', function(){
    player1Choice('reebok');
  });
  newBalance.addEventListener('click', function(){
    player1Choice('new balance');
  });
  jordan.addEventListener('click', function(){
    player1Choice('jordan');
  });
}

action();
