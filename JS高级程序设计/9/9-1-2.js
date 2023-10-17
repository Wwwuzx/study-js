// 9.1.2 定义捕获器 - 9.1.3 捕获器参数及反射器API

const obj = {
  id: "user",
};

const proxy = new Proxy(obj, {
  get(target, property, recriver) {
    console.log(...arguments);
    console.log("目标对象 - 查询属性 - 代理对象", target, property, recriver);
    return Reflect.get(...arguments);
  },
});

console.log(obj.id);
console.log(proxy.id);
