import { findNewdirection  } from './dani_ant';

test ('This part should give new direction to the ant based on color and current position', ()=>{
    let newDirection = findNewdirection(0, 'up');
    expect (newDirection).toBe('right');

    newDirection = findNewdirection(0, 'right');
    expect (newDirection).toBe('down');

    newDirection = findNewdirection(0, 'down');
    expect (newDirection).toBe('left');

    newDirection = findNewdirection(0, 'left');
    expect (newDirection).toBe('up');

    newDirection = findNewdirection(1, 'up');
    expect (newDirection).toBe('left');

    newDirection = findNewdirection(1, 'left');
    expect (newDirection).toBe('down');

    newDirection = findNewdirection(1, 'down');
    expect (newDirection).toBe('right');

    newDirection = findNewdirection(1, 'right');
    expect (newDirection).toBe('up');
});

import { antMoveCorrectDir } from './dani_ant';

test ('This should move the ant to the correct direction', ()=>{
    let newRowMove = antMoveCorrectDir('up');
    expect (newRowMove).toBe(newRowMove--);

    let newColMove = antMoveCorrectDir('right');
    expect (newColMove).toBe(newColMove++);

    newRowMove = antMoveCorrectDir('down');
    expect (newRowMove).toBe(newRowMove++);

    newColMove = antMoveCorrectDir('left');
    expect (newColMove).toBe(newColMove--);
});