Array.prototype.myMap = function (Callback) {
  if (typeof Callback !== "function") {
    throw new TypeError("Callback is not a function");
  }
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(Callback(this[i], i, this));
  }
  return temp;
};

const numbers = [1, 2, 3, 4, 5];
const add = numbers.myMap((num) => num + 10);
const multiply = numbers.myMap((num) => num * num);
console.log({ multiply, add });
