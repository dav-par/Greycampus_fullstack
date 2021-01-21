
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

//Generates BOXCOUNT number of hues of main colour
function generateColors(){
    let colors = [];
    let mainColour = getRandomInt(0,360);
        for(i=0, change=0; i<BOXCOUNT; i++){
        var change = change + (i*5);
        colors[i] = "hsl("+(mainColour+change)+",100%,50%)";
    }
    console.log("maincolour:",mainColour);
    console.log("");
    return colors
}
function generateBoxes(){  //These will need colours, log of correct order and put out randomly
    var colors = generateColors();
    globalThis.correctOrder = [];
    for(i=0; i<BOXCOUNT; i++){
        var div = document.createElement('div');
        var color = colors[i];
        div.classList.add('box');
        div.innerHTML = i;
        div.id = 'box'+i;
        div.draggable = true;
        div.style.backgroundColor = color;
        gameWrapEl.append(div);
        correctOrder[i]= gameWrapEl.childNodes[i+1];
        div.addEventListener("dragstart", drag);
        div.addEventListener("dragover", allowDrop);
        div.addEventListener("drop", drop);
    }
    console.log(correctOrder);
    console.log("");
}

function generateActualOrder(){
    var x = [];
    for(i=0; i<BOXCOUNT; i++){
        x[i] = gameWrapEl.childNodes[i+1];
    }
    //console.log(x);
    return x;
}

function checkOrder(actualOrder){
    //console.log(correctOrder);
    var x = correctOrder;
    var y = actualOrder;
    console.log(x);
    console.log(y);
    console.log("");
    for (var i = 0; i < x.length; i++) {
		if (x[i] !== y[i]) return false;
    }
    console.log("winner!");
    return true;
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
    var tmp = document.createElement('span');
    tmp.className='hide';
    drop_target.before(tmp);
    drag_target.before(drop_target);
    tmp.replaceWith(drag_target);
    actualOrder = generateActualOrder();
    //console.log(actualOrder);
    //console.log(correctOrder);
    //console.log(" ");
    checkOrder(actualOrder);
    //console.log("");
}

function gameInit(){
    generateBoxes();
}

gameInit();