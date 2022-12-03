let gridContainer = document.querySelector('.grid-container');
let color = ''
let boardColor = 'white'
function sizeOfBoard (size) {
    if (size > 100 || size < 2) {
        console.log(newSquareValue.value ='error')
    }
    else{
        
    ;
    gridContainer.style.backgroundColor = 'red';
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`

    let sizeOfSquare = size * size
    
    for(let i = 0; i < sizeOfSquare; i++) {
        let gridSquare = document.createElement('div');
        gridSquare.style.backgroundColor = 'white';
        gridContainer.appendChild(gridSquare);
        gridSquare.addEventListener('mouseover', () => {
            gridSquare.style.backgroundColor = color;
        })

        
    }
    }
}
const setBtn = document.querySelector('.set')
const newSquareValue = document.querySelector('.square-value');
newSquareValue.innerHTML = newSquareValue.value;

setBtn.addEventListener('click', () => {
   {
    sizeOfBoard(newSquareValue.value);
    }
    
})

const blackBtn = document.querySelector('.black')
blackBtn.addEventListener('click' , () => {
    color = 'black'
})

const eraser = document.querySelector('.white')
eraser.addEventListener('click', () =>{
color = 'white'
})




const random = document.querySelector('.random');
random.addEventListener('click', () =>{
 color = `hsl(${Math.random() * 360}, 100%, 50%)`
} )



const resetBtn = document.querySelector('.reset-btn');
resetBtn.addEventListener('click', ()=> {
    let board = document.querySelector('.grid-container');
    let squares = board.querySelectorAll('div')
    squares.forEach((div => div.style.backgroundColor = 'white')
    )
})