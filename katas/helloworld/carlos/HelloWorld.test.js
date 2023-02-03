import { sayHello } from './HelloWorld';

test('hello func should say hello', () => {
    expect(sayHello()).toBe('Hello World!');
});