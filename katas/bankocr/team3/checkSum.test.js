import {checkSum} from './checkSum';

test('verify checksum', () => {
    const numTest = 576516546;
    let sumResult = new checkSum(numTest);
    expect(sumResult.sameNum()).toBe(576516546);
});


