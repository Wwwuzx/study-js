// 尾调用优化
// 尾调用优化的条件
// 1、在严格模式下执行
// 2、尾调用函数返回后没有多余的逻辑
// 3、尾调用函数不能引用外部作用域中自由变量的闭包
// 4、返回值是尾调用函数