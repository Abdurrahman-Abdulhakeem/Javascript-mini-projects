const cardArray = [
    {
        name: 'img1',
        img: 'images/img1.jpg'
    },
    {
        name: 'img2',
        img: 'images/img2.jpg'
    },
    {
        name: 'img3',
        img: 'images/img3.jpg'
    },
    {
        name: 'img4',
        img: 'images/img4.jpg'
    },
    {
        name: 'img5',
        img: 'images/img5.jpg'
    },
    {
        name: 'img6',
        img: 'images/img6.jpg'
    },
    {
        name: 'img1',
        img: 'images/img1.jpg'
    },
    {
        name: 'img2',
        img: 'images/img2.jpg'
    },
    {
        name: 'img3',
        img: 'images/img3.jpg'
    },
    {
        name: 'img4',
        img: 'images/img4.jpg'
    },
    {
        name: 'img5',
        img: 'images/img5.jpg'
    },
    {
        name: 'img6',
        img: 'images/img6.jpg'
    }
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
let cardChosen = [];
let cardChosenIds = [];
const cardsWon = [];

function createBoard() {
    for(let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/img8.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card);
    }
}

createBoard();

function checkMatch() {
   const cards = document.querySelectorAll('img');
   const resultDisplay = document.querySelector('#result');
   const optionOneId = cardChosenIds[0];
   const optionTwoId = cardChosenIds[1];
   console.log(cards);
    console.log('check for match');
    if(optionOneId == optionTwoId) {
        alert('You have clicked the same image!');
    }

    if(cardChosen[0] == cardChosen[1] && optionOneId != optionTwoId) {
        alert('You find a match!');
        cards[optionOneId].style.display = 'none';
        cards[optionTwoId].style.display = 'none';
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardChosen);
    }else {
        cards[optionOneId].setAttribute('src', 'images/img8.png');
        cards[optionTwoId].setAttribute('src', 'images/img8.png');
        alert('Sorry try again!');
    }
    resultDisplay.textContent = cardsWon.length;
    cardChosen = [];
    cardChosenIds = [];

    if(cardsWon.length == cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations you found them all!';
    }
}

function flipCard() {
    // console.log(cardArray);
    const cardId = this.getAttribute('data-id');
    cardChosen.push(cardArray[cardId].name);
    cardChosenIds.push(cardId)

    // console.log('clicked', cardId);
    console.log(cardChosen);
    console.log(cardChosenIds);
    this.setAttribute('src', cardArray[cardId].img);
    if(cardChosen.length === 2) {
        setTimeout(checkMatch, 500);
    }

}