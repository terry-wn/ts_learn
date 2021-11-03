// 抽象类
abstract class Animal {
  abstract makeSound(): void;
  move(): void {
    console.log("动物移动");
  }
}

// 类既可以是实体类，也可以是类型
class Dog extends Animal {
  constructor() {
    super();
  }
  makeSound() {
    console.log("动物滴滴");
  }
}

const dog: Dog = new Dog();
dog.move();
dog.makeSound();

let animals: Animal[] = [dog];
