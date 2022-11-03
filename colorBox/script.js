const container = document.querySelector('.container');
const boxColors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];

const boxNumber = 510;

for(let i = 0; i < boxNumber; i++) {
    const boxes = document.createElement('div');
    boxes.classList.add('boxes');

    boxes.addEventListener('mouseover', () => setColor(boxes))
    boxes.addEventListener('mouseout', () => removeColor(boxes))
    container.appendChild(boxes);
}


function setColor(box) {
    box.style.backgroundColor = boxColors[Math.floor(Math.random() * boxColors.length)];
}

function removeColor(box) {
    box.style.backgroundColor = '#333';
}