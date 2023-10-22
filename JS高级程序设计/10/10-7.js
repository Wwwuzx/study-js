// 函数声明与函数表达式

// 使用函数声明会被js先读取 所以这样不会报错
console.log(func());
function func() {
  return 1;
}


// 使用函数表达式声明 函数被包裹在变量初始化语句中 所以会报错
console.log(func2());
const func2 = function(){
  return 2
}