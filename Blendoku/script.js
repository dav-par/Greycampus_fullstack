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
       // div.innerHTML = i;
        div.id = 'box'+i;

        gameWrapEl.append(div)
    }
}

function swapBoxes(box1, box2){
    
    var class1 = box1.className;
    var class2 = box2.className;

    if(class1 != class2){
        console.log('swap', box1.id, box2.id);
        box1.className = class2;
        box2.className = class1;
    }
}

function getSwipeDirection(pageXStart, pageXEnd, pageYStart, pageYEnd){
    var deltaX = pageXEnd - pageXStart;
    var deltaY = pageYEnd - pageYStart;
    
    //console.log('deltaX ', deltaX);
    //console.log('deltaY ', deltaY);
    var boxid = parseInt(boxToSwap.dataset.id);
    
    var boxToSwapWith;

    if(deltaX < 0 && Math.abs(deltaX<deltaY)){
        if (boxid % GRID_SIZE == 0){
            console.log("can't swip left");
        }else{
            console.log('left');
            boxidToSwapWith = 'box'+(boxid-1);
            boxToSwapWith = document.getElementById(boxidToSwapWith);
            swapBoxes(boxToSwap, boxToSwapWith);
        }
    }

    else if(deltaY < 0 && Math.abs(deltaY<deltaX)){
        if(boxid < GRID_SIZE){
            console.log("can't swipe up");
        }else{
            console.log('up');
            boxidToSwapWith = 'box'+(boxid-GRID_SIZE);
            boxToSwapWith = document.getElementById(boxidToSwapWith);
            swapBoxes(boxToSwap, boxToSwapWith);
        }
    }

    else if(deltaX > 0 && Math.abs(deltaX>deltaY)){
        if ((boxid+1) % GRID_SIZE == 0){
            console.log("can't swip right");
        }else{
            console.log('right');
            boxidToSwapWith = 'box'+(boxid+1);
            boxToSwapWith = document.getElementById(boxidToSwapWith);
            swapBoxes(boxToSwap, boxToSwapWith);
        }

    }

    else if(deltaY > 0 && Math.abs(deltaY>deltaX)){
        if (boxid >= (GRID_COUNT - GRID_SIZE) && (boxid < GRID_COUNT)){
            console.log("can't swip down");
        }else{
            console.log('down');
            boxidToSwapWith = 'box'+(boxid+GRID_SIZE);
            boxToSwapWith = document.getElementById(boxidToSwapWith);
            swapBoxes(boxToSwap, boxToSwapWith);
        }

    }
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
        document.ondragstart = function () { return false; }
        //console.log('down', e.pageX, e.pageY);
        boxToSwap = e.target;
        
        pageXStart = e.pageX;
        pageYStart = e.pageY;
    });

    gameWrapEl.addEventListener('mouseup' , function(e){
        //console.log('up', e.pageX, e.pageY);
        
        pageXEnd = e.pageX;
        pageYEnd = e.pageY;

        getSwipeDirection(pageXStart, pageXEnd, pageYStart, pageYEnd);
    });
    
}

function gameInit(){
    generateBoxes();
    addBoxEventHandlers();
}


gameInit();