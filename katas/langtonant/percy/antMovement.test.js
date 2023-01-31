import { movements } from './ant';

test('langtonAnt movements', () => {
    //white slates=0 right 0 left 1 up 2 down 3
    let newMovement = movements(0, 0);
    expect(newMovement).toBe(2);
    newMovement = movements(0, 2);
    expect(newMovement).toBe(1);
    newMovement = movements(0, 1);
    expect(newMovement).toBe(3);
    newMovement = movements(0, 3);
    expect(newMovement).toBe(0);
    //black slates=1
    newMovement = movements(1, 2);
    expect(newMovement).toBe(0);
    newMovement = movements(1, 0);
    expect(newMovement).toBe(3);
    newMovement = movements(1, 3);
    expect(newMovement).toBe(1);
    newMovement = movements(1, 1);
    expect(newMovement).toBe(2);
});

