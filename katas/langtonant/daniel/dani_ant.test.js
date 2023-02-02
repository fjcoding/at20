import { findNewdirection  } from "./dani_ant";

test ('This part should give new direction to the ant based on color and current position', ()=>{
    let new_direction = findNewdirection(0,'up');
    expect (new_direction).toBe('right');

    new_direction = findNewdirection(0,'right');
    expect (new_direction).toBe('down');

    new_direction = findNewdirection(0,'down');
    expect (new_direction).toBe('left');

    new_direction = findNewdirection(0,'left');
    expect (new_direction).toBe('up');

    new_direction = findNewdirection(1,'up');
    expect (new_direction).toBe('left');

    new_direction = findNewdirection(1,'left');
    expect (new_direction).toBe('down');

    new_direction = findNewdirection(1,'down');
    expect (new_direction).toBe('right');

    new_direction = findNewdirection(1,'right');
    expect (new_direction).toBe('up');

})

import { antMoveCorrectDir } from "./dani_ant";

test ('This should move the ant to the correct direction',()=>{
    let newRowMove = antMoveCorrectDir('up');
    expect (newRowMove).toBe(newRowMove--);

    let newColMove = antMoveCorrectDir('right');
    expect (newColMove).toBe(newColMove++);

    newRowMove = antMoveCorrectDir('down');
    expect (newRowMove).toBe(newRowMove++);

    newColMove = antMoveCorrectDir('left');
    expect (newColMove).toBe(newColMove--);

})