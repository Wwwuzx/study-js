// 9.1.7 代理另一个代理
const obj = {
  id: "we",
};
const proxy1 = new Proxy(obj, {
  get() {
    console.log(1);
    return Reflect.get(...arguments);
  },
});

const proxy2 = new Proxy(proxy1, {
  get() {
    console.log(2);
    return Reflect.get(...arguments);
  },
});
console.log(proxy2.id);
