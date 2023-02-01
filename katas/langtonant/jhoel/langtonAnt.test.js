import LangtonAnt from './langtonant.js';

describe('LangtonAnt Class', () => {
    test('the class constructor should create the grid with the passed params ', () => {
        const langtonAnt = new LangtonAnt(10, LangtonAnt.WHITE, { x: 5, y: 6 });
        expect(langtonAnt.getAntPosition()).toEqual({ x: 5, y: 6 });
        expect(langtonAnt.getGrid()[0][0]).toBe(LangtonAnt.WHITE);
        expect(langtonAnt.getGridDimension()).toBe(10);
    });


    test('the turn function should turn ant to the correct direction on the white square', () => {
        const WHITE = LangtonAnt.WHITE;
        const langtonAnt = new LangtonAnt(10, WHITE, { x: 5, y: 6 });
        //remember that the initial direction of the ant is UP
        langtonAnt.turnAnt(WHITE);
        expect(langtonAnt.getAntDirection()).toBe(LangtonAnt.RIGHT);

        //now the ant direction should be RIGHT
        langtonAnt.turnAnt(WHITE);
        expect(langtonAnt.getAntDirection()).toBe(LangtonAnt.DOWN);

        //now the ant direction should be DOWN
        langtonAnt.turnAnt(WHITE);
        expect(langtonAnt.getAntDirection()).toBe(LangtonAnt.LEFT);

        //now the ant direction should be LEFT
        langtonAnt.turnAnt(WHITE);
        expect(langtonAnt.getAntDirection()).toBe(LangtonAnt.UP);
    });

    test('the turn function should turn ant to the correct direction on the black square', () => {
        const BLACK = LangtonAnt.BLACK;
        const langtonAnt = new LangtonAnt(10, BLACK, { x: 5, y: 6 });
        //remember that the initial direction of the ant is UP
        langtonAnt.turnAnt(BLACK);
        expect(langtonAnt.getAntDirection()).toBe(LangtonAnt.LEFT);

        //now the ant direction should be LEFT
        langtonAnt.turnAnt(BLACK);
        expect(langtonAnt.getAntDirection()).toBe(LangtonAnt.DOWN);

        //now the ant direction should be DOWN
        langtonAnt.turnAnt(BLACK);
        expect(langtonAnt.getAntDirection()).toBe(LangtonAnt.RIGHT);

        //now the ant direction should be RIGHT
        langtonAnt.turnAnt(BLACK);
        expect(langtonAnt.getAntDirection()).toBe(LangtonAnt.UP);
    });

    test('the setColorAntSquare function should flip the square with right color before the ant forward', () => {
        const langtonAnt = new LangtonAnt(10, LangtonAnt.BLACK, { x: 5, y: 6 });

        langtonAnt.setColorAntSquare(LangtonAnt.BLACK);
        expect(langtonAnt.getColorAntSquare()).toBe(LangtonAnt.WHITE);

        langtonAnt.setColorAntSquare(LangtonAnt.WHITE);
        expect(langtonAnt.getColorAntSquare()).toBe(LangtonAnt.BLACK);
    });

    test('the antForward function should move the ant to the right position', () => {
        const langtonAnt = new LangtonAnt(10, LangtonAnt.WHITE, { x: 5, y: 6 });

        //remember that the initial direction of the ant is UP\
        const moveAnt = () => {
            langtonAnt.turnAnt(langtonAnt.getColorAntSquare());
            langtonAnt.setColorAntSquare(langtonAnt.getColorAntSquare());
            langtonAnt.moveAntForward();
        };

        moveAnt();
        expect(langtonAnt.getAntPosition()).toEqual({ x: 6, y: 6 });

        moveAnt();
        expect(langtonAnt.getAntPosition()).toEqual({ x: 6, y: 7 });

        moveAnt();
        expect(langtonAnt.getAntPosition()).toEqual({ x: 5, y: 7 });

        moveAnt();
        expect(langtonAnt.getAntPosition()).toEqual({ x: 5, y: 6 });
        //now the position of the ant will be { x: 0, y: 0 } and direction will be lEFT
        /*  <- _ _ _ _ _ _ _ _ _ _
             _ _ _ _ _ _ _ _ _ _ _
        */
        const moveAndError = () => {
            langtonAnt.setAntPosition({ x: 0, y: 0 });
            langtonAnt.setAntDirection(LangtonAnt.LEFT);
            langtonAnt.moveAntForward();
        };
        expect(moveAndError).toThrow(LangtonAnt.OUT_OF_BOUNDS_ERROR);
    });
});
