// 10.14 闭包
//  一个函数返回另一个函数  --- 函数嵌套
// 内部函数访问了外部函数的变量

// 函数被调用时，会创建执行上下文，并创建一个作用域链。
// 当函数嵌套时，外部函数会将内部函数的活动对象添加到自己的作用域链中
// 当内部函数访问了外部函数的变量，内部函数的作用域链上就保存对外部函数的活动对象（所有的变量）的引用
// 当外部函数执行完毕后，执行的上下文作用域链会被销毁但活动对象仍然不能被销毁，因为内部函数仍然保持着引用

// 10.14.1 闭包中this对象
// 内部函数无法直接访问外部函数的this和arguments
window.identity = "this window";
const obj = {
  identity: "this obj",
  getIdntity() {
    return function () {
      return this.identity;
    };
  },
};
obj.getIdntity(); // this window
// 若要访问外部函数的this 使用变量将this保存起来 然后内部函数访问此变量

