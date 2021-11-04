// 元编程
import "reflect-metadata";
function inject(serviceIdentifier: string) {
  return function (target: Object, targetKey: string, idnex: number) {
    Reflect.defineMetadata(serviceIdentifier, "名字", target);
  };
}
class IndexController {
  public indexService: string;
  constructor(@inject("xxx") indexService: string) {
    this.indexService = indexService;
  }
}
const indexController = new IndexController("哎哎哎");
console.log(indexController.indexService);
// js元编程
console.log(Reflect.getMetadata("xxx", IndexController));
