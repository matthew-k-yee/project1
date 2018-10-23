const player1Score = 0;
const player2Score = 0;
let playerChoice = 0;

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

function player2Choice() {
  let choices = ['nike', 'adidas', 'reebok', 'new balance', 'jordan'];
  let random = Math.floor(Math.random() * 5)
  return choices[random];
}

function gameConditions (choice) {
  console.log(`user1 choice: ${choice}`);
  let player2 = player2Choice();
  console.log(`user2 choice: ${player2}`)
  if ( choice === 'nike' && (player2 === 'adidas' || player2 === 'jordan')) {
    console.log('BELIEVE THE HYPE!')
  } else if ( choice === 'adidas' && (player2 === 'new balance' || player2 === 'reebok')) {
    console.log('BELIEVE THE HYPE!')
  } else if ( choice === 'reebok' && (player2 === 'nike' || player2 === 'jordan')) {
    console.log('BELIEVE THE HYPE!')
  } else if ( choice === 'new balance' && (player2 === 'nike' || player2 === 'reebok')) {
    console.log('BELIEVE THE HYPE')
  } else if ( choice === 'jordan' && (player2 === 'new balance' || player2 === 'adidas')) {
    console.log('BELIEVE THE HYPE!')
  } else if ( player2 === 'nike' && (choice === 'adidas' || choice === 'jordan')) {
    console.log('Take the L!')
  } else if ( player2 === 'adidas' && (choice === 'new balance' || choice === 'reebok')) {
    console.log('Take the L!')
  } else if ( player2 === 'reebok' && (choice === 'nike' || choice === 'jordan')) {
    console.log('Take the L!')
  } else if ( player2 === 'new balance' && (choice === 'nike' || choice === 'reebok')) {
    console.log('Take the L')
  } else if ( player2 === 'jordan' && (choice === 'new balance' || choice === 'adidas')) {
      console.log('Take the L')
  } else {
    console.log('Re-Do');
  }

}

// function win() {
//   const player1Score = 0;
//   player1Score++;
// }

// function lose() {
//   if playerTwo wins -- log one point to player 2
// }


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
    gameConditions('nike');
  });
  adidas.addEventListener('click', function(){
    gameConditions('adidas');
  });
  reebok.addEventListener('click', function(){
    gameConditions('reebok');
  });
  newBalance.addEventListener('click', function(){
    gameConditions('new balance');
  });
  jordan.addEventListener('click', function(){
    gameConditions('jordan');
  });
}

action();
