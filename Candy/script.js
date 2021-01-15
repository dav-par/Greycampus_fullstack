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

const colors = ['lightblue', 'lightred', 'lightgreen', 'lightyellow', 'lightpink'];
var boxes = document.getElementsByClassName('box');

for(var i=0; i<boxes.length; i++){
    boxes[i].style.backgroundColor = colors[parseInt(Math.random()*5)];
}