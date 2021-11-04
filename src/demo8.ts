/**
 * 1. interface和type的区别
 * 相同点
 * 1-1. 都可以描述一个对象或者函数
 * 1-2. 都允许进行拓展
 * 不同点
 * 2-1. type 声明基本类型别名、联合类型、元组等
 * 2-2. typeof 获取实例的对象
 * 2-3. interface 可以被合并
 */
/**
 * 1. 有关于后台的接口，愿意去使用interface
 * 2. 第三方和开发的SDK，比如Vue使用interface
 * 3. 前端的库，使用interface
 * 4. 正常的开发任务，type直接用更方便
 */
// 前端开发
interface IPriceData {
  id: number;
  m: string;
}
type IPriceDataArray = IPriceData[];
function getPriceData() {
  return new Promise<IPriceDataArray>((resolve, reject) => {
    fetch("url")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        const data: IPriceDataArray = [];
        resolve(data);
      });
  });
}
getPriceData().then((data) => {
  console.log(data);
});
