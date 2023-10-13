const gridDOMElement = document.querySelector('.row')

const playDOMElement = document.querySelector('.play-btn')

playDOMElement.addEventListener('click',function(){
    const difficultyLevel = document.getElementById('difficulty-level').value
    emptyGrid()
    createGrid(chooseLevel(difficultyLevel))
    const cellsArray = document.querySelectorAll('.cell')
    for(let i = 0; i < cellsArray.length; i++){
        const currentCell = cellsArray[i]
        currentCell.addEventListener('click', clickCell)
    }
})

function chooseLevel(num){
    if(num == 1) return 10
    else if (num == 2) return 9
    else if (num == 3) return 7
}

function clickCell(){
    const currentCellNumber = this.innerHTML
    console.log('You clicked the cell number: ' + currentCellNumber)
    this.classList.add('cell-clicked')
}

function emptyGrid(){
    gridDOMElement.innerHTML = ''
}

function createGrid(num){
    for(let i = 0; i < num ** 2; i++){
        const cellElement = `<div class="cell cell-${num}">${i+1}</div>`
        gridDOMElement.innerHTML += cellElement
    }
}

