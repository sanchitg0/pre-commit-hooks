// let promise = new Promise(function (resolve, reject) {
//   console.log("hello");
//   resolve(56);
// });
// console.log("hello");
// setTimeout(function () {
//   console.log("hello in 2s");
// }, 2000);
// console.log("this");
// console.log(promise);

function functione() {
  return new Promise((resolve, reject) => {
    // const randomDelay = Math.random() * 2000;
    // Random delay between 0 and 3 seconds

    setTimeout(() => {
      const result = "This is the result";
      resolve(result);
    }, 3000);
  });
}

module.exports = functione;
