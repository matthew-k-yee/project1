let player1Score = 0;
let player2Score = 0;

const nike = document.querySelector('#box1');
const adidas = document.querySelector('#box2');
const reebok = document.querySelector('#box3');
const newBalance = document.querySelector('#box4');
const jordan = document.querySelector('#box5');

let scoreBox = document.querySelector('.scorebox');
let score1 = document.querySelector('.player1Score');
let score2 = document.querySelector('.player2Score');

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
      return lose();
  } else if ( player2 === 'jordan' && (choice === 'new balance' || choice === 'adidas')) {
      console.log('Take the L');
      return lose();
  } else {
    return draw();
  }

}

function win() {
  score1.innerHTML = player1Score++;
}

function lose() {
  score2.innerHTML = player2Score++;
}


//tie logic
// if both users choose same element
//-- play again
// if both users don't choose element with winning formula
//-- do it again

function draw () {
  console.log(`it's a draw`);
}

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
