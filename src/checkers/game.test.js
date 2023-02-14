import {Grid} from './grid';
import { Piece } from './piece';
import { Game } from './game';

describe('Game', () => {
    let game;

    beforeEach(() => {
        game = new Game();
    });

    test('creates a Grid object', () => {
        expect(game.grid).toBeInstanceOf(Grid);
    });

    test('creates red pieces', () => {
        expect(game.redPieces).toHaveLength(12);
        expect(game.redPieces[3]).toBeInstanceOf(Piece);
        expect(game.redPieces[7]).toBeInstanceOf(Piece);
    });

    test('creates white pieces', () => {
        expect(game.whitePieces).toHaveLength(12);
        expect(game.whitePieces[4]).toBeInstanceOf(Piece);
        expect(game.whitePieces[11]).toBeInstanceOf(Piece);
    });

    test('creates a grid with red and white pieces', () => {
        expect(game.grid.gridBoard[0][0]).toBeInstanceOf(Piece);
        expect(game.grid.gridBoard[1][1]).toBeInstanceOf(Piece);
        expect(game.grid.gridBoard[2][2]).toBeInstanceOf(Piece);
        expect(game.grid.gridBoard[3][3]).toBeNull();
        expect(game.grid.gridBoard[4][4]).toBeNull();
        expect(game.grid.gridBoard[5][5]).toBeInstanceOf(Piece);
        expect(game.grid.gridBoard[6][6]).toBeInstanceOf(Piece);
        expect(game.grid.gridBoard[7][7]).toBeInstanceOf(Piece);
    });

    test('initializes the game', () => {
        expect(game.showBoard()).toBeDefined();
    });
});