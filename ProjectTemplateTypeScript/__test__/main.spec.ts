import { Main } from '../src/main';

const main = new Main();

describe('Default test', () => {
  it('should work', () => {
    const myString: string = 'Hello world';
    expect(main.getParam(myString)).toBe('Hello world');
  });
});
