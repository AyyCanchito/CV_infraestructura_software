import { LowercaseVowelsPipe } from './lowercase-vowels-pipe';

describe('LowercaseVowelsPipe', () => {
  it('create an instance', () => {
    const pipe = new LowercaseVowelsPipe();
    expect(pipe).toBeTruthy();
  });
});
