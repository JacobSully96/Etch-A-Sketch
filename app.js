
function makeGrid(size){

    let board = document.querySelector('.board');
    board.style.gridTemplateColumns = "repeat(16, 1fr)";
    board.style.gridTemplateRows = "repeat(16, 1fr)";

    let amount = size * size;
    for (i = 0; i <= amount; i++) {
        let square = document.createElement('div');
        square.style.backgroundColor = "blue";
        board.insertAdjacentElement('beforeend', square);
        square.addEventListener('mouseover', colorSquare);
    }
}

makeGrid(16);



function colorSquare() {
    this.style.backgroundColor = 'black';
}
