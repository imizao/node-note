setTimeout(() => {
  console.log(1);
}, 0)
let doSth = new Promise((resolve, reject) => {
  console.log('hello');
  resolve();
});

setTimeout(() => {
  doSth.then(() => {
    console.log('over')
  });
},3000)

// hello 1 over