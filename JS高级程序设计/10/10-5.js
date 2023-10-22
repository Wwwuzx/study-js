// 默认参数
// ES6 语法
function func(num = 10) {
  return num;
}

console.log(func());
console.log(func(1));

// 作用域

// function func2(num1, num2 = num1) {     // 这样没有问题
function func2(num1, num2 = num3) {
  let num3 = 10;
  return `${num1},${num2},${num3}`;
}
console.log(func2(1, 2));
// 这样不传第二个参数会报错
console.log(func2(1));
