
import { switchColorBox } from './ActionAnt';
import { newOri } from './ActionAnt';

// Test for switch box color

test('switchColorBox function switch the box from white to black', () => {
    let white = 0;
    let black = 1;
    var colorAct = white;
    expect(switchColorBox(colorAct)).toBe(black);
});

test('switchColorBox function switch the box from black to white', () => {
    let white = 0;
    let black = 1;
    var colorAct = black;
    expect(switchColorBox(colorAct)).toBe(white);
});

// Test for Switch ant´s orientation

test('newOri function switch the orientation of ant, to  the rigth when the box is white', () => {
    let ori = 2;
    let white = 0;
    var colorAct = white;
    expect(newOri(ori, colorAct)).toBe(3);
});

test('newOri function switch the orientation of ant, to the left when the box is black', () => {
    let ori = 2;
    let black = 1;
    var colorAct = black;
    expect(newOri(ori, colorAct)).toBe(1);
});
