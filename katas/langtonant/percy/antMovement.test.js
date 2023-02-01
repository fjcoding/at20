import { movements } from './ant';


test('langtonAnt movements on white slates', () => {
    //white slates=0 right 0 left 1 up 2 down 3
    const white = 0;
    const right = 0, left = 1, up = 2, down = 3;

    let newMovement = movements(white, right);
    expect(newMovement).toBe(up);

    newMovement = movements(white, up);
    expect(newMovement).toBe(left);

    newMovement = movements(white, left);
    expect(newMovement).toBe(down);

    newMovement = movements(white, down);
    expect(newMovement).toBe(right);
});

test('langtonAnt movements on black slates', () => {
    // right 0 left 1 up 2 down 3
    //black slates=1
    const black = 1;
    const right = 0, left = 1, up = 2, down = 3;

    let newMovement = movements(black, up);
    expect(newMovement).toBe(right);

    newMovement = movements(black, right);
    expect(newMovement).toBe(down);

    newMovement = movements(black, down);
    expect(newMovement).toBe(left);

    newMovement = movements(black, left);
    expect(newMovement).toBe(up);
});


