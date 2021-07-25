let cellContentDiv=document.querySelector(".cells-content");


function initCells(){

    let cellContent=`<div class="top-left-cell"></div>`
    cellContent+=`<div class="top-row">`
    for(let i=0;i<26;i++){
        cellContent+=`<div class="top-row-cell">${String.fromCharCode(65+i)}</div>`
    }
    cellContent+=`</div>`

    cellContent+=`<div class="left-col">`
    for(let i=0;i<100;i++){
        cellContent+=`<div class="left-col-cell">${i+1}</div>`
    }
    cellContent+=`</div>`



cellContent+="<div class='cells'>"
    for(let i=0;i<100;i++){

        cellContent+=`<div class="row">`
        for(let j=0;j<26;j++){
            cellContent+=`<div class="cell" contentEditable='true'></div>`
        }
        cellContent+=`</div>`
    }

    cellContent+="</div>"
    cellContentDiv.innerHTML=cellContent;



}

initCells();
let TopRow=document.querySelector(".top-row");

let leftCol=document.querySelector(".left-col");
let topLeftCell=document.querySelector(".top-left-cell");

cellContentDiv.addEventListener("scroll",function(e){


    let top = e.target.scrollTop;
    let left = e.target.scrollLeft;
    console.log(top,left);
    TopRow.style.top = top +"px";
    topLeftCell.style.top = top + "px";
    topLeftCell.style.left = left + "px";
    leftCol.style.left = left + "px";



})

