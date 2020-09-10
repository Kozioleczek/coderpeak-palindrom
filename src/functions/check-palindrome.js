// Check Palindrome Function

class Palindrome {
  constructor(string) {
    if (typeof string === 'string') {
      this.string = string;
    } else {
      throw new Error('check-palindrome.js: Expected inputed data to be string');
    }
  }

  check() {
    const cs = this.string.toLowerCase().replace(/[\W_]/g, '');
    const reverse = cs.split('').reverse().join('');
    return cs === reverse;
  }
}

module.exports = Palindrome;
