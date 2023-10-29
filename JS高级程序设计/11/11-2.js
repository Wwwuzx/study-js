// 11.2 期约
// Promise
// 11.2.2 

// then()
// 接收两个参数 第一个是成功的函数 第二个是失败的函数
let p1 = Promise.reject("suc");
let p2 = p1.then(
  () => 1,
  () => {}
);
let p3 = Promise.reject("foo");
let p4 = p3.then(null, () => {});
setTimeout(console.log, 0, p2);
setTimeout(console.log, 0, p4);

// catch（）
// 接收一个参数 失败的函数
// 此方法等同与上方 p3\p4 例

// finally()
// 接收一个参数 不管成功失败都会执行
// finally 会返回传递父级的 promise状态值
// 但是如果接受了一个 pendingh 或者 rejected 的新 promise，则会传递接收的状态值

