const obj = {
  id: "9-2",
};
const proxy = new Proxy(obj, {
  // 9-2-1
  get(target, property, recriver) {
    console.log("目标对象 - 查询属性 - 代理对象", target, property, recriver);
    // 返回值无限制
    return Reflect.get(...arguments);
  },

  // 9-2-2
  set(target, property, value, recriver) {
    console.log(
      "目标对象 - 引用属性 - 赋值 - 接收对象",
      target,
      property,
      value,
      recriver
    );
    // 必须返回 Boolean
    return Reflect.set(...arguments);
  },

  // 9-2-3
  has(target, property) {
    console.log("目标对象 - 查询属性", target, property);
    // 必须返回 Boolean
    return Reflect.has(...arguments);
  },

  // 9-2-4
  defineProperty(target, property, descriptor) {
    // descriptor 包括 Enumerable、Configurable、Writable、value、get、set
    console.log(
      "目标对象 - 属性 - 定义的数据属性",
      target,
      property,
      descriptor
    );
    // 必须返回 Boolean
    return Reflect.defineProperty(...arguments);
  },

  // 9-2-5
  getOwnPropertyDescriptor(target, property) {
    console.log("目标对象 - 属性", target, property);
    // 必须返回对象，属性不存在的时候返回 undefined
    return Reflect.getOwnPropertyDescriptor(...arguments);
  },

  // 9-2-6
  deleteProperty(target, property) {
    console.log("目标对象 - 属性", target, property);
    // 必须返回 Boolean
    return Reflect.deleteProperty(...arguments);
  },

  // 9-2-7
  ownKeys(target) {
    console.log("目标对象", target);
    // 必须返回包含字符串或符号的可枚举对象
    return Reflect.ownKeys(...arguments);
  },

  // 9-2-8
  getPrototypeOf(target) {
    console.log("目标对象", target);
    // 必须返回对象或者 null
    return Reflect.getPrototypeOf(...arguments);
  },

  // 9-2-9
  setPrototypeOf(target, prototype) {
    console.log("目标对象 - target的替代原型", target, prototype);
    // 必须返回 Boolean
    return Reflect.setPrototypeOf(...arguments);
  },

  // 9-2-10
  isExtensible(target) {
    console.log("目标对象", target);
    // 必须返回 Boolean
    return Reflect.isExtensible(...arguments);
  },

  // 9-2-11
  preventExtensions(target) {
    console.log("目标对象", target);
    // 必须返回 Boolean
    return Reflect.preventExtensions(...arguments);
  },

  // 9-2-11
  apply(target, thisArg, argumentsList) {
    console.log(
      "目标对象 - this - 调用的参数列表",
      target,
      thisArg,
      argumentsList
    );
    // 返回值无限制
    return Reflect.preventExtensions(...arguments);
  },

  // 9-2-12
  construct(target, argumentsList, newTarget) {
    console.log(
      "目标对象 - 传递给目标构造函数的参数列表 - 最初被调用的构造函数",
      target,
      argumentsList,
      newTarget
    );
    // 必须返回一个对象
    return Reflect.construct(...arguments);
  },
});
