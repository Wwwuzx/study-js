// 递归

function factorial(num) {
  if (num <= 1) {
    return 1;
  }
  //   return num * factorial(num - 1); // 如果有下面的代码则会报错
  //   return num * arguments.callee(num - 1); // 此方法严格模式会报错
}
const anotherFactorial = factorial;
factorial = null;
console.log(anotherFactorial(5));


// 可以使用命名函数表达式来创建
// 这样不管变量名怎么变 函数名都不变
// 严格模式和非严格模式都可使用
let newFactorial = function f(num) {
  if (num <= 1) {
    return 1;
  }
  return num * f(num - 1);
};

const anotherNewFactorial = newFactorial;
newFactorial = null;
console.log(anotherNewFactorial(5));
