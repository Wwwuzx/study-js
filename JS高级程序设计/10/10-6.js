// 参数扩展与收集
// 10-6-1 扩展参数
function fun() {
  return arguments.length;
}
console.log(fun(...[1, 2, 2, 3, 3]));
// 10-6-2 收集参数
function fun2(frist, ...params) {
  // 扩展参数只能作为最后一个参数
  return params;
}
console.log(fun2(1));
console.log(fun2(1, 2));
console.log(fun2(1, 2, 3));
