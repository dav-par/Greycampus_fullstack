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
const buttonELs = document.getElementsByTagName('button')





function generateBoxes(){    
    for(i=0; i<GRID_COUNT; i++){
        var div = document.createElement('div');
        var randomClass = parseInt(Math.random() * NO_OF_BOXES)

        div.classList.add('box')
        div.classList.add(CLASSES[randomClass])

        gameWrapEl.append(div)
    }
}

const mouseDownhandler = function(){

}

function addBoxEventHandlers(){
    /*
    swipe right : pageX increase
    swipe down  : pageY increase
    
    swipe up    : pageY decrease
    swipe left  : pageX decrease
    */
    document.addEventListener('mousedown',function(e){
        console.log(e.pageX, e.pageY);
    });

    /*gameWrapEl.addEventListener('mousedown' , function(e){
        console.log('down', e.target);
        isMouseDown = true;
    });

    gameWrapEl.addEventListener('mouseup' , function(e){
        console.log('up', e.target);
        isMouseDown = false;
    });

    gameWrapEl.addEventListener('mousemove' , function(e){
        if(isMouseDown == true){
            console.log('move', e.target);
        }
    })*/
}

function gameInit(){
    generateBoxes();
    addBoxEventHandlers();
}


gameInit();

/*
function gameWrapEl = document.getElementById('game-wrapper');

const colors = ['lightblue', 'lightred', 'lightgreen', 'lightyellow', 'lightpink'];

var boxes = document.getElementsByClassName('box');

for(var i=0; i<boxes.length; i++){
    boxes[i].style.backgroundColor = colors[parseInt(Math.random()*5)];
}
*/