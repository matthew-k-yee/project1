let player1Score = "";
let player2Score = "";


const nike = document.querySelector('#box1');
const adidas = document.querySelector('#box2');
const asics = document.querySelector('#box3');
const newBalance = document.querySelector('#box4');
const jordan = document.querySelector('#box5');

let scoreBox = document.querySelector('.scorebox');
let score1 = document.querySelector('.player1Score');
let score2 = document.querySelector('.player2Score');

let show_img1 =  document.querySelector('.player1gameZone')
let show_img2 = document.querySelector('.player2gameZone')

let commentary = document.querySelector('#commentary-text');
let player1Text = document.querySelector('.p1text');
let player2Text = document.querySelector('.p2text');
player1Text.innerHTML = "Are you a ";
player2Text.innerHTML = " HYPEBEAST?"

const nike_box = document.querySelector('img#img1')
const adidas_box = document.querySelector('img#img2')
const asics_box = document.querySelector('img#img3')
const newBalance_box = document.querySelector('img#img4')
const jordan_box = document.querySelector('img#img5')

let bigImg = '';
let playerOneImg = document.querySelector('#player_1_img');
let playerTwoImg = document.querySelector('#player_2_img');

function gameInitialize () {
  player1Score = 0;
  player2Score = 0;
  score1.innerHTML =  player1Score;
  score2.innerHTML = player2Score;
  player1Text = document.querySelector('.p1text');
  player2Text = document.querySelector('.p2text');
  player1Text.innerHTML = "Are you a ";
  player2Text.innerHTML = " HYPEBEAST?"
  playerOneImg.src = ""
  playerTwoImg.src = ""
}

function player2Choice() {
  let choices = [
    {name: 'nike', url: "./images/nike.jpeg"},
    {name: 'adidas', url: "./images/adidas.jpeg"},
    {name: 'asics', url: "./images/asics.jpeg"},
    {name: 'new balance', url: "./images/new-balance.jpeg"},
    {name: 'jordan', url: "./images/jordan.jpeg"}
  ];
  let random = Math.floor(Math.random() * 5)
  player2Text.innerHTML = 'Guy Fieri picked ' + choices[random].name;
  playerTwoImg.src = choices[random].url;
  return choices[random].name;
}

function gameConditions (choice) {
  console.log(`user1 choice: ${choice}`);
  let player2 = player2Choice();
  console.log(`user2 choice: ${player2}`)
  if ( choice === 'nike' && (player2 === 'adidas' || player2 === 'jordan')) {
      return win();
  } else if ( choice === 'adidas' && (player2 === 'new balance' || player2 === 'asics')) {
      return win();
  } else if ( choice === 'asics' && (player2 === 'nike' || player2 === 'jordan')) {
      return win();
  } else if ( choice === 'new balance' && (player2 === 'nike' || player2 === 'asics')) {
      return win();
  } else if ( choice === 'jordan' && (player2 === 'new balance' || player2 === 'adidas')) {
      return win();
  } else if ( player2 === 'nike' && (choice === 'adidas' || choice === 'jordan')) {
      return lose();
  } else if ( player2 === 'adidas' && (choice === 'new balance' || choice === 'asics')) {
      return lose();
  } else if ( player2 === 'asics' && (choice === 'nike' || choice === 'jordan')) {
      return lose();
  } else if ( player2 === 'new balance' && (choice === 'nike' || choice === 'asics')) {
  } else if ( player2 === 'jordan' && (choice === 'new balance' || choice === 'adidas')) {
      return lose();
  } else {
    return tie();
  }
}

function win(choice) {
  player1Score++;
  score1.innerHTML = player1Score;
  if(player1Score > 9) {
    alert('BELIEVE THE HYPE. YOU WIN!')
  }
}

function lose() {
  player2Score++;
  score2.innerHTML = player2Score;
  if(player2Score > 9) {
    alert('TAKE THIS L')
  }
}

function tie() {
  player1Text.innerText = "ddad";
  player2Text.innerHTML = "DRAW";
}

function p1Message(choice) {
  player1Text.innerHTML = `HYPEGAWD chose ${choice} |`
}


function action() {
  nike.addEventListener('click', function(e){
    // console.log(e)
    // console.log(e.target.src);
    bigImg = e.target.src;
    playerOneImg.src = bigImg;
    gameConditions('nike');
    p1Message('nike');

  });

  adidas.addEventListener('click', function(e){
    bigImg = e.target.src;
    playerOneImg.src = bigImg;
    gameConditions('adidas');
    p1Message('adidas');

  });

  asics.addEventListener('click', function(e){
    bigImg = e.target.src;
    playerOneImg.src = bigImg;
    gameConditions('asics');
    p1Message('asics');
  });

  newBalance.addEventListener('click', function(e){
    bigImg = e.target.src;
    playerOneImg.src = bigImg;
    gameConditions('new balance');
    p1Message('new balance');
  });

  jordan.addEventListener('click', function(e){
    bigImg = e.target.src;
    playerOneImg.src = bigImg;
    gameConditions('jordan');
    p1Message('jordan');
  });
}
action();


let resetGame = document.querySelector("button#replay");
resetGame.addEventListener('click', gameRestart);

function gameRestart() {
   gameInitialize();
}
