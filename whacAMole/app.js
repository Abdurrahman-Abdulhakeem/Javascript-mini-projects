const boxes = document.querySelectorAll('.box');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');

let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;

function randomBox() {
    boxes.forEach(box => {
        box.classList.remove('mole');
    });

    let randomBox = boxes[Math.floor(Math.random() * 9)];
    randomBox.classList.add('mole');

    hitPosition = randomBox.id 
    
}

boxes.forEach(box => {
    box.addEventListener('mousedown', () => {
        if(box.id === hitPosition) {
            result++;
            score.textContent = result;
        }
    })
})


function moveMole() {
    
    timerId = setInterval(randomBox, 1000);
}

moveMole();

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime;
    if(currentTime == 0){
        clearInterval(countDownId);
        clearInterval(timerId);
        alert('Game over! your final score is '+ result);
    }
};

let countDownId = setInterval(countDown, 1000);