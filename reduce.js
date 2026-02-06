Array.prototype.myReduce = function (callbackFn, initialValue) {
  if (typeof callbackFn !== "function") {
    throw new TypeError("Callback is not a function");
  }
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    if (accumulator === undefined) {
      accumulator = this[i];
    } else {
      accumulator = callbackFn(accumulator, this[i], i, this);
    }
  }
  return accumulator;
};
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.myReduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 15
