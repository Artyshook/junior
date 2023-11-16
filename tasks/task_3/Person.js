export default class Person {
  constructor(jmeno, vek) {
    this.jmeno = jmeno;
    this.vek = vek;
  }

  toString() {
    return `Jmenuji se ${this.jmeno} a je mi ${this.vek} let`;
  }
}

// run jest for test
