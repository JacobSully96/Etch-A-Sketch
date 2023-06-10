const gridContainer = document.querySelector('.grid-container');


function makeGrid() {
    
    for (i = 0; i <= 8; i++) {
        for(j = 0; j <= 8; j++){
            const square = document.createElement('div');
            square.classList.add('square');
            gridContainer.appendChild(square);
        }
    }



}

makeGrid();


// square.addEventListener('click', function(){
//     square.classList.remove('square');
//     square.classList.add('square-active');
// });