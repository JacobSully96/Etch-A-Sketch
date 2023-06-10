
function makeGrid(size) {

    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
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

makeGrid(16);



function colorSquare() {
    this.style.backgroundColor = 'black';
}


function resetBoard() {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = "lightblue");
}
