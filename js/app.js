const gridDOMElement = document.querySelector('.row')

const playDOMElement = document.querySelector('.play-btn')

playDOMElement.addEventListener('click',function(){
    emptyGrid()
    createGrid(100)
    const cellsArray = document.querySelectorAll('.cell')
    for(let i = 0; i < cellsArray.length; i++){
        const currentCell = cellsArray[i]
        currentCell.addEventListener('click', clickCell)
    }
})

function clickCell(){
    const currentCellNumber = this.innerHTML
    console.log('You clicked the cell number: ' + currentCellNumber)
    this.classList.add('cell-clicked')
}

function emptyGrid(){
    gridDOMElement.innerHTML = ''
}

function createGrid(num){
    for(let i = 0; i < num; i++){
        const cellElement = `<div class="cell cell-10">${i+1}</div>`
        gridDOMElement.innerHTML += cellElement
    }
}

