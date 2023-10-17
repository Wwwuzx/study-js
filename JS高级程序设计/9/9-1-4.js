// 9.1.4 捕获器不变式 - 9.1.5 撤销代理

const obj = {};

Object.defineProperty(obj, "id", {
  configurable: false,
  writable: false,
  value: "userId",
});

console.log(obj.id);
const handle = {
  get() {
    // return "www";
    return "userId"; // 若与本值一样则正常
  },
};
const { proxy, revoke } = Proxy.revocable(obj, handle);
console.log(proxy.id);
revoke();
console.log(proxy.id); // 已撤销会报错
