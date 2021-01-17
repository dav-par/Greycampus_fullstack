/* 

1 blue, 2 Red, 3 green, 4 yellow, 5 pink
1 2 3 4 5 1 2 3
4 5 1 2 3 4 5 1
2 3 4 5 1 2 3 4
5 1 2 3 4 5 1 2
3 4 5 1 2 3 4 5
1 2 3 4 5 1 2 3
4 5 1 2 3 4 5 1
2 3 4 5 1 2 3 4 */



const GRID_SIZE = 8;
const GRID_COUNT = GRID_SIZE*GRID_SIZE;

const CLASES = ['c1', 'c2', 'c3', 'c4', 'c5'];

const NO_OF_BOXES = CLASES.length;

const gameWrapEl = document.getElementById('game-wrapper');

var isMouseDown = false;
var boxToSwap, boxToSwapWith;

function generateBoxes(){    
    for(i=0; i<GRID_COUNT; i++){
        var div = document.createElement('div');
        var randomClass = parseInt(Math.random() * NO_OF_BOXES)

        div.classList.add('box')
        div.classList.add(CLASES[randomClass]);

        div.dataset.id = i;
        div.innerHTML = i;
        div.id = 'box'+i;

        gameWrapEl.append(div)
    }
}

const mouseDownhandler = function(){
}

function getSwipeDirection(pageXstart, pageXEnd, pageYStart, pageXEnd){
    var deltaX = pageXEnd - pageXstart;
    var deltaY = pageYEnd - pageYstart;

    console.log('deltaX ', deltaX);
    console.log('deltaY ', deltaY);
}

function addBoxEventHandlers(){
    var pageXStart, pageXEnd, pageYStart, pageYEnd;
    /*
    swipe right : pageX increase
    swipe down  : pageY increase
    
    swipe up    : pageY decrease
    swipe left  : pageX decrease
    */

    gameWrapEl.addEventListener('mousedown' , function(e){
        console.log('down', e.pageX, e.pageY);
        
        pageXStart = e.pageX;
        pageYStart = e.pageY;
    });

    gameWrapEl.addEventListener('mouseup' , function(e){
        console.log('up', e.pageX, e.pageY);
        
        pageXEnd = e.pageX;
        pageYEnd = e.pageY;

        getSwipeDirection(pageXstart, pageXEnd, pageYStart, pageYEnd);
    });
}

function gameInit(){
    generateBoxes();
    addBoxEventHandlers();
}


gameInit();