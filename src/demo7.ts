// 1. 不知道类型是啥
interface LengthWise {
  length: number;
}
function identity<T extends LengthWise>(arg: T) {
  console.log(arg.length);
  return arg;
}
const result = identity<string>("lp");
console.log(result);

// 2. 类型、实体类
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}
const myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};

console.log(myGenericNumber.add(40, 50));

// 3. 使用泛型重载
function getData<T>(value: T): T {
  console.log(value);
  return value;
}
getData<number>(111);
getData<string>("aaa");

// 4. 泛型接口
interface ConfigFn {
  <T>(value: T): void;
}
const getValue: ConfigFn = function <T>(value: T): void {
  console.log(value);
};
getValue<string>("xxx");

// 5. 动态泛型
interface Bookmark {
  msg: string;
}
class BookmarkService1<T extends Bookmark> {
  items: T[] = [];
}
class BookmarkService2<T extends Bookmark = Bookmark> {
  items: T[] = [];
}
const s = new BookmarkService2();
