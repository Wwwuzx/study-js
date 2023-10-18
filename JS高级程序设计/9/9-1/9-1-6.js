// 9.1.6 实用反射API

const obj = {};

try {
  Object.defineProperty(obj, "id", "123");
  console.log(obj.id);
} catch (error) {
  console.log("error");
}

// 用反射重构
// 会返回 Boolean
if (Reflect.defineProperty(obj, "newId", { value: "123" })) {
  console.log(obj.newId);
} else {
  console.log("Relfect Error");
}

// 这些都会返回 Boolean
Reflect.defineProperty()
Reflect.preventExtensions()
Reflect.setPrototypeOf()
Reflect.set()
Reflect.deleteProperty()
