import { Command } from './interfaceCommand';

describe('Command', () => {
    let command;

    beforeEach(() => {
        command = new Command();
    });

    describe('isValidName', () => {
        it('should return the name if it is not empty', async () => {
            const name = await command.isValidName('Pedrito');
            expect(name).toEqual('Pedrito');
        });

        it('should prompt for input until a non-empty name is given', async () => {
            const mockAskAndRead = jest.spyOn(command, 'askAndRead')
                .mockImplementationOnce(() => Promise.resolve(''))
                .mockImplementationOnce(() => Promise.resolve(''))
                .mockImplementationOnce(() => Promise.resolve('Miguel'));

            const name = await command.isValidName('');
            expect(name).toEqual('Miguel');
            expect(mockAskAndRead).toHaveBeenCalledTimes(3);
        });
    });

    describe('inputForSelectPiece', () => {
        it('should call player.selectPiece with the correct arguments', async () => {
            const mockAskAndRead = jest.spyOn(command, 'askAndRead')
                .mockImplementationOnce(() => Promise.resolve('1'))
                .mockImplementationOnce(() => Promise.resolve('2'));

            const mockSelectPiece = jest.fn();
            const player = { selectPiece: mockSelectPiece };
            await command.inputForSelectPiece(player);

            expect(mockSelectPiece).toHaveBeenCalledWith({ x: 1, y: 2 });
            expect(mockAskAndRead).toHaveBeenCalledTimes(2);
        });
    });

    describe('inputForMovePiece', () => {
        it('should call player.movePiece with the correct arguments', async () => {
            const mockAskAndRead = jest.spyOn(command, 'askAndRead')
                .mockImplementationOnce(() => Promise.resolve('3'))
                .mockImplementationOnce(() => Promise.resolve('4'));

            const mockMovePiece = jest.fn();
            const mockRefreshGrid = jest.fn();
            const mockShowBoard = jest.fn(() => 'board');
            const player = { movePiece: mockMovePiece, game: { refreshGrid: mockRefreshGrid, showBoard: mockShowBoard } };
            await command.inputForMovePiece(player);

            expect(mockMovePiece).toHaveBeenCalledWith({ x: 3, y: 4 });
            expect(mockRefreshGrid).toHaveBeenCalledTimes(1);
            expect(mockShowBoard).toHaveBeenCalledTimes(1);
            expect(mockAskAndRead).toHaveBeenCalledTimes(2);
        });
    });

    describe('inputForKillPiece', () => {
        it('should call player.killEnemyPiece with the correct arguments', async () => {
            const mockAskAndRead = jest.spyOn(command, 'askAndRead')
                .mockImplementationOnce(() => Promise.resolve('5'))
                .mockImplementationOnce(() => Promise.resolve('6'));

            const mockKillEnemyPiece = jest.fn();
            const mockRefreshGrid = jest.fn();
            const mockShowBoard = jest.fn(() => 'board');
            const player = { killEnemyPiece: mockKillEnemyPiece, game: { refreshGrid: mockRefreshGrid, showBoard: mockShowBoard } };
            await command.inputForKillPiece(player);

            expect(mockAskAndRead).toHaveBeenCalledTimes(2);
            expect(mockKillEnemyPiece).toHaveBeenCalledWith({ x: 5, y: 6 });
            expect(mockRefreshGrid).toHaveBeenCalledTimes(1);
            expect(mockShowBoard).toHaveBeenCalledTimes(1);
        });
    });
});