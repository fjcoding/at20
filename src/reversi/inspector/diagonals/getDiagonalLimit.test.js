//import { describe } from 'yargs'
import {getDiagonalLimit} from './getDiagonalLimit.js';


describe('The class will get and return the maximum steps that should be taken by the inspector', () => {
    it('The input sign value is both positive and in the coordinates row<column ', () => {
        const boardLimit = 7;
        var tokenCoordinates = [1, 2];
        var rowSign = 1;
        var columnSign = 1;
        var limit = new getDiagonalLimit();
        limit.getLimit(rowSign, columnSign, tokenCoordinates);
        var stepLimit = limit.maxSteps;
        var step = limit.currentStep;
        const expectedLimit = boardLimit - Math.max(...tokenCoordinates);
        expect(stepLimit).toBe(expectedLimit);
        expect(step).toStrictEqual(1);
    });

    it('The input sign value both negative and in the coordinates row>=column ', () => {
        var tokenCoordinates = [5, 3];
        var rowSign = -1;
        var columnSign = -1;
        var limit = new getDiagonalLimit();
        limit.getLimit(rowSign, columnSign, tokenCoordinates);
        var stepLimit = limit.maxSteps;
        var step = limit.currentStep;
        const expectedLimit = Math.min(...tokenCoordinates);
        expect(stepLimit).toBe(expectedLimit);
        expect(step).toStrictEqual(1);
    });

    it('The input sign value row positive and column negative and in the coordinates row>=column and row + column coordinates is <= boardLimit', () => {
        var tokenCoordinates = [3, 1];
        var rowSign = 1;
        var columnSign = -1;
        var limit = new getDiagonalLimit();
        limit.getLimit(rowSign, columnSign, tokenCoordinates);
        var stepLimit = limit.maxSteps;
        var step = limit.currentStep;
        const expectedLimit = Math.min(...tokenCoordinates);
        expect(stepLimit).toBe(expectedLimit);
        expect(step).toStrictEqual(1);
    });

    it('The input sign value row positive and column negative and in the coordinates row < column and row + column coordinates is <= boardLimit', () => {
        var tokenCoordinates = [3, 4];
        var rowSign = 1;
        var columnSign = -1;
        var limit = new getDiagonalLimit();
        limit.getLimit(rowSign, columnSign, tokenCoordinates);
        var stepLimit = limit.maxSteps;
        var step = limit.currentStep;
        const expectedLimit = Math.max(...tokenCoordinates);
        expect(stepLimit).toBe(expectedLimit);
        expect(step).toStrictEqual(1);
    });

    it('The input sign value row positive and column negative and in the coordinates row>=column and row + column coordinates is > boardLimit', () => {
        const boardLimit = 7;
        var tokenCoordinates = [6, 3];
        var rowSign = 1;
        var columnSign = -1;
        var limit = new getDiagonalLimit();
        limit.getLimit(rowSign, columnSign, tokenCoordinates);
        var stepLimit = limit.maxSteps;
        var step = limit.currentStep;
        const expectedLimit = boardLimit - Math.max(...tokenCoordinates);
        expect(stepLimit).toBe(expectedLimit);
        expect(step).toStrictEqual(1);
    });

    it('The input sign value row positive and column negative and in the coordinates row < column and row + column coordinates is > boardLimit', () => {
        const boardLimit = 7;
        var tokenCoordinates = [2, 6];
        var rowSign = 1;
        var columnSign = -1;
        var limit = new getDiagonalLimit();
        limit.getLimit(rowSign, columnSign, tokenCoordinates);
        var stepLimit = limit.maxSteps;
        var step = limit.currentStep;
        const expectedLimit = boardLimit - Math.min(...tokenCoordinates);
        expect(stepLimit).toBe(expectedLimit);
        expect(step).toStrictEqual(1);
    });

    it('The input sign value row negative and column positive and in the coordinates row>=column and row + column coordinates is <= boardLimit', () => {
        var tokenCoordinates = [2, 2];
        var rowSign = -1;
        var columnSign = 1;
        var limit = new getDiagonalLimit();
        limit.getLimit(rowSign, columnSign, tokenCoordinates);
        var stepLimit = limit.maxSteps;
        var step = limit.currentStep;
        const expectedLimit = Math.max(...tokenCoordinates);
        expect(stepLimit).toBe(expectedLimit);
        expect(step).toStrictEqual(1);
    });

    it('The input sign value row negative and column positive and in the coordinates row < column and row + column coordinates is <= boardLimit', () => {
        var tokenCoordinates = [1, 4];
        var rowSign = -1;
        var columnSign = 1;
        var limit = new getDiagonalLimit();
        limit.getLimit(rowSign, columnSign, tokenCoordinates);
        var stepLimit = limit.maxSteps;
        var step = limit.currentStep;
        const expectedLimit = Math.min(...tokenCoordinates);
        expect(stepLimit).toBe(expectedLimit);
        expect(step).toStrictEqual(1);
    });

    it('The input sign value row negative and column positive and in the coordinates row >= column and row + column coordinates is > boardLimit', () => {
        const boardLimit = 7;
        var tokenCoordinates = [6, 2];
        var rowSign = -1;
        var columnSign = 1;
        var limit = new getDiagonalLimit();
        limit.getLimit(rowSign, columnSign, tokenCoordinates);
        var stepLimit = limit.maxSteps;
        var step = limit.currentStep;
        const expectedLimit = boardLimit - Math.min(...tokenCoordinates);
        expect(stepLimit).toBe(expectedLimit);
        expect(step).toStrictEqual(1);
    });

    it('The input sign value row negative and column positive and in the coordinates row < column and row + column coordinates is > boardLimit', () => {
        const boardLimit = 7;
        var tokenCoordinates = [3, 6];
        var rowSign = -1;
        var columnSign = 1;
        var limit = new getDiagonalLimit();
        limit.getLimit(rowSign, columnSign, tokenCoordinates);
        var stepLimit = limit.maxSteps;
        var step = limit.currentStep;
        const expectedLimit = boardLimit - Math.max(...tokenCoordinates);
        expect(stepLimit).toBe(expectedLimit);
        expect(step).toStrictEqual(1);
    });
});
