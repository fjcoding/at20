import { Command } from './interfaceCommand';

describe('test function interfaceCommand', () => {
    test('inputForMovePiece', async () => {
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