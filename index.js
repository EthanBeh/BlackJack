// Build a BlackJack Game

// variables representing two cards 
let firstCard = 10
let secondCard = 4
let cards = [firstCard, secondCard];

//challenge #1
//create a new variable and set it to the sum of the two cards 
let sum = 0;
for (let i = 0; i < cards.length; i++) {
    sum += cards[i];
}
let hasBlackJack = sum == 21;
let isAlive = sum <= 21;

//challenge #2 
// code the statements below based on the conditions shown in blackjack.png from the images folder
// your output should work in the browser's console based on changing the values assigned to the cards

//starter code


let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function renderGame() {
    if (cards.length > 0) {
        cardsEl.textContent = "Cards: " + cards[0];
        for (let i = 0; i < cards.length; i++) {
            cardsEl.textContent += " - " + cards[i];
        }
    }
    calculateSum();
    sumEl.textContent = "Sum: " + sum;
    setMessage();
}

function calculateSum() {
    sum = 0;
    for (let i = 0; i < cards.length; i++) {
        sum += cards[i];
    }
}

function setMessage() {
    let hasBlackJack = sum == 21;
    let isAlive = sum <= 21;
    if (hasBlackJack) {
        message = "Woohoo! You've got Blackjack! 🥳"
    } else if (isAlive) {
        message = "Do you want to draw a new card? 🙂"
    } else {
        message = "You're out of the game! 😭"
    }
    console.log(message)
}

function newCard() {
    let card = getRandomCard();
    cards.push(card);
    calculateSum();
    renderGame();
}

function startGame() {
    isAlive = true;
    firstCard = getRandomCard();
    secondCard = getRandomCard();
    calculateSum();
    renderGame();
}

function getRandomCard() {
    let val = Math.floor(Math.random() * 13 + 1);
    if (val == 1) {
        return 11;
    } else if (val > 9) {
        return 10;
    } return val;
}