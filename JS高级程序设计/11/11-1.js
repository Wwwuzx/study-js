// 11.1 异步编程

function doule(params) {
  setTimeout(() => {
    console.log(params * 2);
  }, 1000);
}

doule(2)