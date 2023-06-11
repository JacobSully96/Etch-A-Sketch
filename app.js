
let color = 'black';

function makeGrid(size) {

    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for (i = 0; i <= amount; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare);
        square.style.backgroundColor = "lightblue";
        board.insertAdjacentElement('beforeend', square);
    }
}


// create grid with size parameter default to 16 x 16 grid
makeGrid(16);

// Change dimensions of grid base on number input value
function setSize(input){
  makeGrid(input);
}

// changes color of square when hovered over, the 'drawing' part of the board
function colorSquare() {
    if(color === 'random'){
        this.style.backgroundColor = getRandomColor();
    }else{
        this.style.backgroundColor = color;
    }
}

// assign new color
function changeColor(newColor) {
    color = newColor;
}

// reset board back to original color
function resetBoard() {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = "lightblue");
}

// generate a random color
function getRandomColor() {

    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let randColor = `rgba(${r},${g},${b})`

    return randColor;
}

