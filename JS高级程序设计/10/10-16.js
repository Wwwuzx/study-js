// 10.16 私有变量
function myObj() {
  let num = 10;
  function hello() {
    console.log("hello");
  }
  this.run = function () {
    console.log("num=", num);
    hello();
  };
}
const my = new myObj();
my.run();
// 在这个构造函数里 num 和 hello是私有变量和方法 所有实例无法访问到
// this.run 是特权方法 本质是闭包 所有它可以访问构造函数里的所有变量和方法

// 10.6.1 静态私有变量
// 首先 这个自执行函数是个闭包
// 内部函数引用了外部函数的变量，且定义了一个构造函数挂载在全局
// 所以name变量不会被清理掉 成为了这个构造函数的私有变量
// 但是这个静态私有变量导致每个实例都是没有了自己的私有变量
// 所以用这个方法还是上面的方法 根据自己情况而定

(function () {
  let name = "";
  Person = function (value) {
    name = value;
  };
  Person.prototype.getName = function () {
    return name;
  };
  Person.prototype.setName = function (value) {
    name = value;
  };
})();

const person1 = new Person("haha");
console.log(person1.getName()); // haha
const person2 = new Person("xixi");
console.log(person1.getName()); // xixi
// 注: 使用闭包和私有变量会导致作用域链变长，会导致查找变慢

// 10.16.2 模块模式 - 10.16.3 模块增强模式
// 还是构造函数，不过返回的是对象了，对象内的属性可以自己操作
let fn = (function () {
  let name = "abc";
  function getName() {
    return name;
  }
  const obj = {
    age: 24,
  };
  obj.getFnName = getName;
  return obj;
})();

console.log(fn.getFnName());
console.log(fn.age);
