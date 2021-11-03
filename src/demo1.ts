let isDone: boolean = false;
let num: number = 1;
let myName: string = "";

function alertName(name: string): string {
  return "测试" + name;
}
alertName("123");

// javascript: void (0);
let unusable: void = undefined;

// 类型推断
function getString(something: string | number): string {
  return something.toString();
}

// 枚举，一些固定的参数集合
enum Days {
  Sun,
  Mon = 5,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}

interface Person {
  readonly id: number;
  uname?: string;
  age: number;
  [proName: string]: any;
}
const lp: Person = {
  id: 1001,
  age: 20,
};
lp["xx"] = 20;

// type
