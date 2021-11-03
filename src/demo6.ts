// function getLength1(str: string | number): number {
//   return str.toLocaleString;
// }

// 类型断言
function getLength2(str: string | number): number {
  if ((<string>str).length) {
    return (<string>str).length;
  } else {
    return str.toString().length;
  }
}

function getLength3(str: string | number): number {
  if ((str as string).length) {
    return (str as string).length;
  } else {
    return str.toString().length;
  }
}

type Name = string;
type Func = () => string;
type NameOrFunc = Name | Func;

function getName(n: NameOrFunc): Name {
  if (typeof n === "string") {
    return n;
  } else {
    return n();
  }
}

// interface A {
//   msg: string;
// }
// function helper(options: A): A {
//   return options;
// }
// const xxA: A = {};

declare module "koa-swig" {
  interface Vue {
    a: number;
  }
  interface Vue {
    b: string;
  }
}
