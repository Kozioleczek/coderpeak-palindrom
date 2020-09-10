import Palindrome from '@/functions/check-palindrome';

describe('check-palindrome.js', () => {
  it('return true if string is palindrome', () => {
    const input = 'Nawijaj Iwan';
    const pal = new Palindrome(input);
    expect(pal.check()).toBe(true);
  });
  it('return false if string is NOT palindrome', () => {
    const input = 'Ala ma kota';
    const pal = new Palindrome(input);
    expect(pal.check()).toBe(false);
  });
  it('return error if inputed number', () => {
    expect(() => new Palindrome(20).check()).toThrow();
  });
});
