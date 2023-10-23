// 函数表达式

// 函数声明提升，会优先读取函数声明 所以没问题
sayHI("hi");
function sayHI(params) {
  console.log(params);
}

// 使用函数表达式则不会提升
// 这样创建的函数叫作匿名函数
yo();
const yo = function () {
  console.log("yo");
};
