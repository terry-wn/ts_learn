class demo1 {
  private num: number;
  constructor() {
    this.num = 20;
  }
}
const n1 = new demo1();
console.log(n1);

class demo2 {
  #num: number;
  constructor() {
    this.#num = 20;
  }
}
const n2 = new demo2();
console.log(n2);
