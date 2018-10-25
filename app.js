let player1Score = 0;
let player2Score = 0;
let gameOver;

const nike = document.querySelector('#box1');
const adidas = document.querySelector('#box2');
const reebok = document.querySelector('#box3');
const newBalance = document.querySelector('#box4');
const jordan = document.querySelector('#box5');

let scoreBox = document.querySelector('.scorebox');
let score1 = document.querySelector('.player1Score');
let score2 = document.querySelector('.player2Score');

let commentary = document.querySelector('#commentary-text');
let player1Text = document.querySelector('.p1text');
let player2Text = document.querySelector('.p2text');

function player2Choice() {
  let choices = ['nike', 'adidas', 'reebok', 'new balance', 'jordan'];
  let random = Math.floor(Math.random() * 5)
  player2Text.innerHTML = 'Le Whack picked ' + choices[random];
  return choices[random];

}

function gameConditions (choice) {
  console.log(`user1 choice: ${choice}`);
  let player2 = player2Choice();
  console.log(`user2 choice: ${player2}`)
  if ( choice === 'nike' && (player2 === 'adidas' || player2 === 'jordan')) {
      console.log('BELIEVE THE HYPE!');
      return win();
  } else if ( choice === 'adidas' && (player2 === 'new balance' || player2 === 'reebok')) {
      console.log('BELIEVE THE HYPE!');
      return win();
  } else if ( choice === 'reebok' && (player2 === 'nike' || player2 === 'jordan')) {
      console.log('BELIEVE THE HYPE!');
      return win();
  } else if ( choice === 'new balance' && (player2 === 'nike' || player2 === 'reebok')) {
      console.log('BELIEVE THE HYPE')
      return win();
  } else if ( choice === 'jordan' && (player2 === 'new balance' || player2 === 'adidas')) {
      console.log('BELIEVE THE HYPE!');
      return win();
  } else if ( player2 === 'nike' && (choice === 'adidas' || choice === 'jordan')) {
      console.log('Take the L!');
      return lose();
  } else if ( player2 === 'adidas' && (choice === 'new balance' || choice === 'reebok')) {
      console.log('Take the L!');
      return lose();
  } else if ( player2 === 'reebok' && (choice === 'nike' || choice === 'jordan')) {
      console.log('Take the L!');
      return lose();
  } else if ( player2 === 'new balance' && (choice === 'nike' || choice === 'reebok')) {
      console.log('Take the L');
  } else if ( player2 === 'jordan' && (choice === 'new balance' || choice === 'adidas')) {
      console.log('Take the L');
      return lose();
  } else {
    player1Text.innerHTML = 'TIE'
  }
}

function win(choice) {
  player1Score++;
  score1.innerHTML = player1Score;
  console.log(`this is player1Score: ${player1Score}`);
  if(player1Score > 21) {
    alert('BELIEVE THE HYPE. YOU WIN!')
  }
}

function lose() {
  player2Score++;
  score2.innerHTML = player2Score;
  console.log(`this is player2Score: ${player2Score}`);
  if(player2Score > 21) {
    alert('TAKE THIS L')
  }
}

function p1Message(choice) {
  player1Text.innerHTML = `HYPEGAWD chose ${choice} |`
}


function action() {
  nike.addEventListener('click', function(){
    gameConditions('nike');
    p1Message('nike');
  });

  adidas.addEventListener('click', function(){
    gameConditions('adidas');
    p1Message('adidas');
  });

  reebok.addEventListener('click', function(){
    gameConditions('reebok');
    p1Message('reebok');
  });

  newBalance.addEventListener('click', function(){
    gameConditions('new balance');
    p1Message('new balance');
  });

  jordan.addEventListener('click', function(){
    gameConditions('jordan');
    p1Message('jordan');
  });
}
action();
