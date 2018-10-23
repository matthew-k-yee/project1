const player1Score = 0;
const player2Score = 0;

const nike = document.getElementById('box1');
const adidas = document.getElementById('box2');
const reebok = document.getElementById('box3');
const newBalance = document.getElementById('box4');
const jordan = document.getElementById('box5');

let score1 = document.getElemntByClass(player1Score);


//win logic
//nike beats adidas and Jordan
//adidas beats new balance and Reebok
//reebok beats nike and Jordan
//new balance beats nike and Reebok
//jordan beats new balance and adidas

// function win(player1, player2) {
//   if (chose1 === nike && choce2 === adidas || jordan)
//     return player1 wins
// }



//tie logic
// if both users choose same element
//-- play again
// if both users don't choose element with winning formula
//-- do it again

function draw (chose1, choce2) {
  if (chose1 === chose2)
    return tie

}

// function game()

//function clicks
nike.addEventListener('click', clickPop);
adidas.addEventListener('click', clickPop);
reebok.addEventListener('click', clickPop);
newBalance.addEventListener('click', clickPop);
jordan.addEventListener('click', clickPop);

function clickPop() {
  console.log('User picked');
}
