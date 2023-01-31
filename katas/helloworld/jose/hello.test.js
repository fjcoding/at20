import { sayHello } from './hello';

test('hello func should say hello', () => {
    expect(sayHello()).toBe('hello world...!');
});