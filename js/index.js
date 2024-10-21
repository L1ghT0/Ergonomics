import { moveElem } from "./animation.js";

const maxImageHeight = 782;
const tableOne = document.getElementById('tableOne');
const tableTwo = document.getElementById('tableTwo');
const ergonomics_images = document.querySelector('.ergonomics_images');

if(tableOne.height < maxImageHeight){
    ergonomics_images.style.height = tableOne.height + 'px'
}

window.addEventListener('resize', function(event) {
    if(tableOne.height < maxImageHeight){
        ergonomics_images.style.height = tableOne.height + 'px'
    } else {
        ergonomics_images.style.height = maxImageHeight + 'px'
    }
}, true);



const button_imgGoUp   = document.getElementById('button_imgGoUp');
const button_imgGoDown = document.getElementById('button_imgGoDown');

button_imgGoUp.onclick = (e) => {
    moveElem.up(tableOne, 400)
    moveElem.up(tableTwo, 400)
}

button_imgGoDown.onclick = (e) => {
    moveElem.down(tableOne, 400)
    moveElem.down(tableTwo, 400)
}
