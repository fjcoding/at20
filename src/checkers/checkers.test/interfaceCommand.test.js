import { Command } from '../interfaceCommand';

describe('Command', () => {
    let command;
  
    beforeEach(() => {
      command = new Command();
    });
  
    describe('isValidName', () => {
      it('returns a valid name when a non-empty string is provided', async () => {
        const name = await command.isValidName('John');
        expect(name).toBe('John');
      });
    });
  
    describe('inputForSelectPiece', () => {
      it('selects the piece at the given position', async () => {
        const mockPlayer = {
            movePiece: jest.fn(),
            game: {
                refreshGrid: jest.fn(),
                showBoard: jest.fn(),
            },
        };
        const command = new Command();

        jest.spyOn(command, 'askAndRead')
            .mockReturnValueOnce(Promise.resolve('1'))
            .mockReturnValueOnce(Promise.resolve('2'));

        await command.inputForMovePiece(mockPlayer);

        expect(mockPlayer.movePiece).toHaveBeenCalledWith({ x: 1, y: 2 });
        expect(mockPlayer.game.refreshGrid).toHaveBeenCalled();
        expect(mockPlayer.game.showBoard).toHaveBeenCalled();
      });
    });
  
    describe('inputForMovePiece', () => {
      it('moves the piece to the given position', async () => {
        const mockAskAndRead = jest.spyOn(command, 'askAndRead')
          .mockResolvedValueOnce('3')
          .mockResolvedValueOnce('4');
  
        const player = { movePiece: jest.fn(), game: { refreshGrid: jest.fn(), showBoard: jest.fn() } };
        await command.inputForMovePiece(player);
  
        expect(player.movePiece).toHaveBeenCalledWith({ x: 3, y: 4 });
        expect(player.game.refreshGrid).toHaveBeenCalled();
        expect(player.game.showBoard).toHaveBeenCalled();
  
        mockAskAndRead.mockRestore();
      });
    });
  
    describe('inputForKillPiece', () => {
      it('kills the enemy piece and moves to the given position', async () => {
        const mockAskAndRead = jest.spyOn(command, 'askAndRead')
          .mockResolvedValueOnce('5')
          .mockResolvedValueOnce('6');
  
        const player = { killEnemyPiece: jest.fn(), game: { refreshGrid: jest.fn(), showBoard: jest.fn() } };
        await command.inputForKillPiece(player);
  
        expect(player.killEnemyPiece).toHaveBeenCalledWith({ x: 5, y: 6 });
        expect(player.game.refreshGrid).toHaveBeenCalled();
        expect(player.game.showBoard).toHaveBeenCalled();
  
        mockAskAndRead.mockRestore();
      });
    });
  });