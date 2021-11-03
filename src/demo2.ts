// 数组和元组

// 已有数组
let arr1: number[] = [1, 2, 3];
let arr2 = new Array<number>(4);

interface NumberArray {
  [index: number]: number;
}
let arr3: NumberArray = [1, 2, 3];

// 类数组
function sum() {
  let args: IArguments = arguments;
  // args.callee()
}

// 元组
// let arrAny: any[] = [1, '测试']
let tuple1: [number, string, boolean] = [1, "测试", false];

// 区别
function useFetch() {
  const response: string = "lp";
  const age: number = 20;
  return tunlify(response, age);
  // return [response, age]
}

function tunlify<T extends unknown[]>(...elements: T): T {
  return elements;
}

const [response] = useFetch();
