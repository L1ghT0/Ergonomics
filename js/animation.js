export const moveElem = {
    up:   moveElemUp,
    down: moveElemDown
}

function moveElemUp(elem, ms){
    const currentTop = Number(getComputedStyle(elem).top.slice(0, -2));
    
    animate({
        timing: linear,
        draw: (progress) => {
            elem.style.top = currentTop + progress * 100 * -1 + 'px'
        },
        duration: ms
    })
}

function moveElemDown(elem, ms){
    const currentTop = Number(getComputedStyle(elem).top.slice(0, -2));

    animate({
        timing: linear,
        draw: (progress) => {
            elem.style.top = currentTop + progress * 100 + 'px'
        },
        duration: ms
    })
}

function animate({timing, draw, duration}) {
    let start = performance.now();

    requestAnimationFrame(function animate(time) {
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;
  
      let progress = timing(timeFraction);
  
      draw(progress); 
  
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
  
    });
}

function linear(timeFraction) {
    return timeFraction;
}
