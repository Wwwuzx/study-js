// 函数内部
// 10-9-1 arguments
// es6中新增了 arguments.callee 属性 指向当前函数
// 此属性在严格模式下会报错
function factorial(num) {
  if (num <= 1) {
    return 1;
  } else {
    // return num * factorial(num - 1);
    return num * arguments.callee(num - 1); // 此时与函数名称解耦
  }
}

let trueFactorial = factorial;
factorial = function () {
  return 0;
};
console.log(trueFactorial(5)); // 使用 arguments.callee 则正常计算 ，使用函数名调用则返回 0
console.log(factorial(5));

// 10-9-2 this
// this 指向取决于谁调用了当前函数
function King() {
  this.name = "He";
  //  这里使用箭头函数中的this会保留定义该函数的上下文 所以会打印 HE
  setTimeout(() => {
    console.log(this.name);
  }, 1000);
}

function Queen() {
  this.name = "SHE";
  //   这里就不会 所以会打印 undefined
  setTimeout(function () {
    console.log(this.name);
  }, 1000);
}
new King();
new Queen();

// 10-9-3 caller
// 这个属性是函数对象上的属性，指向调用该函数的函数
function outer() {
  inner();
}
function inner() {
  console.log(inner.caller);
  console.log(arguments.callee.caller); // 降低和函数名的耦合性可以这样写
}
outer();

// 10-9-4 new.target
// 此属性可以判断是不是使用new关键字来调用此函数

function func() {
  if (!new.target) {
    throw "not new";
  }
  console.log("success");
}

new func();
func();
