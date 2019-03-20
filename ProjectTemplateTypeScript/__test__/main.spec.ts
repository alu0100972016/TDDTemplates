import { Main } from '../src/main';

const main = new Main();

describe('Default test', () => {
  it('should work', () => {
    let myString: string = 'Hello world';
    expect(main.getParam()).toBe('Hello world');
  });
});
