Array.prototype.myFilter = function (callbackFn) {
  if (typeof callbackFn !== "function") {
    throw new TypeError("Callback is not a function");
  }
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callbackFn(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

const nums = [1, 2, 3, 4, 5];
const evenNumbers = nums.myFilter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
