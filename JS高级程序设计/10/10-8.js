// 函数作为值

function creatCompaeisonFunction(propertyName) {
  return function (obj1, obj2) {
    const val1 = obj1[propertyName];
    const val2 = obj2[propertyName];
    if (val1 < val2) {
      return -1;
    } else if (val1 > val2) {
      return 1;
    } else {
      return 0;
    }
  };
}

const data = [
  { name: "WWW", age: 14 },
  { name: "LLL", age: 11 },
];
data.sort(creatCompaeisonFunction("age"));
console.log(data);
