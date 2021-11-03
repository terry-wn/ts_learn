// 1. 不要混淆ES6和TS中的 =>
// : (x: number, y: number) => number
let myNum: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};
// 2. 函数默认参数
function buildName(firstName: string, lastName: string = "cat") {
  return firstName + lastName;
}
// 3. 剩余参数
function push(array: any[], ...items: any[]) {
  items.forEach((item) => {
    array.push(item);
  });
}
let a = [4];
push(a, 1, 2, 3);

// 4. 可选参数，必须放到后面
function getName(firstName: string = "cat", lastName?: string) {
  if (lastName) {
    return firstName + lastName;
  } else {
    return firstName;
  }
}
const Tom = getName("Tom");
console.log(Tom);
