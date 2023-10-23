// 函数的属性与方法
function sum(num1, num2) {
  return num1 + num2;
}
function func() {
  return 1;
}

// length 代表函数的形参个数
console.log(sum.length);
console.log(func.length);

const p = {
  color: "red",
};
function sayColor(num1, num2) {
  if (arguments.length) {
    return sum.call(this, num1, num2); // 要传参必须得一个个传
    // return sum.apply(this, arguments);  // 第二个参数可以传数组
  }
  return this.color;
}
console.log(sayColor(1, 2));

// call 和 apply 作用都差不多
console.log(sayColor.apply(p));
console.log(sayColor.call(p));

// bind 则是创建一个新的函数实例 this值绑定到传入的对象
console.log(sayColor.bind(p)());
