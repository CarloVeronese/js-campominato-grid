const gridDOMElement = document.querySelector('.row')

const playDOMElement = document.querySelector('.play-btn')

playDOMElement.addEventListener('click',function(){
    emptyGrid()
    createGrid(100)
})

function emptyGrid(){
    gridDOMElement.innerHTML = ''
}

function createGrid(num){
    for(let i = 0; i < num; i++){
    const cellElement = `<div class="cell cell-10">${i+1}</div>`
    console.log(cellElement)
    gridDOMElement.innerHTML += cellElement
    }
}