let cellContent=document.querySelector(".cells-content");

function initCells(){

    let cells="";

    for(let i=0;i<100;i++){

        cells+=`<div class="row">`
        for(let j=0;j<26;j++){
            cells+=`<div class="cell">Cells</div>`
        }
        cells+=`</div>`
    }
cellContent.innerHTML=cells;



}

initCells();