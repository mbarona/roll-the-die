let randomNum1 = Math.floor(Math.random()*6) + 1;
let randomNum2 = Math.floor(Math.random()*6) + 1;

const d1 = document.querySelector('.img1');
const d2 = document.querySelector('.img2');
let imgDir = "images/dice";

imgD1Src = `${imgDir}${randomNum1}.png`;
imgD2Src = `${imgDir}${randomNum2}.png`;


d1.setAttribute("src", imgD1Src);
d2.setAttribute("src", imgD2Src);

const h1 = document.querySelector('h1');

if (randomNum1 > randomNum2) {
    h1.textContent = "🚩 Player 1 Wins!";
} else if (randomNum1 < randomNum2) {
    h1.textContent = "Player 2 Wins! 🚩";
} else if (randomNum1 === randomNum2) {
    h1.textContent = "Draw!";
}

