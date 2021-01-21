
const BOXCOUNT = 5;
const gameWrapEl = document.getElementById('game-wrapper');

/* need to make a gradient of colours based on one colour
break in to BOXCOUNT shades
assign to boxes in random order
keep track of correct order */


//Generates random number for diffrent colours
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

//Generates BOXCOUNT number of ligtnesses of main colour
function generateColors(){
    let colors = [];
    let mainColour = getRandomInt(0,360);
        for(i=0, change=0; i<BOXCOUNT; i++){
        var change = change + (i*5);
        console.log("maincolour:",mainColour);
        colors[i] = "hsl("+(mainColour+change)+",100%,50%)";
    }
    return colors
}

function generateBoxes(){  //These will need colours, log of correct order and put out randomly
    var colors = generateColors();
    for(i=0; i<BOXCOUNT; i++){
        var div = document.createElement('div');
        var color = colors[i];
        div.classList.add('box');
        div.innerHTML = i;
        div.id = 'box'+i;
        div.draggable = true;
        div.style.backgroundColor = color;
        gameWrapEl.append(div);
        div.addEventListener("dragstart", drag);
        div.addEventListener("dragover", allowDrop);
        div.addEventListener("drop", drop);
    }
}

function drag(event){
    event.dataTransfer.setData
    ('target_id',event.target.id);
}

function allowDrop(event){
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();  
    var drop_target = event.target;
    var drag_target_id = event.dataTransfer.getData('target_id');
    var drag_target = document.querySelectorAll('#'+drag_target_id)[0];
    console.log(drag_target);
    var tmp = document.createElement('span');
    tmp.className='hide';
    drop_target.before(tmp);
    drag_target.before(drop_target);
    tmp.replaceWith(drag_target);
}

function gameInit(){
    generateBoxes();
}

gameInit();