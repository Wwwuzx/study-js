// 9.1.1 创建空代理

const target = {
  id: "target",
};

const proxy = new Proxy(target, {});

console.log("9.1.1", target.id);
console.log("9.1.1", proxy.id);

// 代理赋值会反应在两个对象上
proxy.id = "user";

console.log("9.1.1", target.id);
console.log("9.1.1", proxy.id);

console.log("9.1.1", target.hasOwnProperty("id"));
console.log("9.1.1", proxy.hasOwnProperty("id"));

// 用全等区分代理和目标
console.log(target === proxy);
