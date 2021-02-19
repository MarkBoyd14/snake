function countTrue(arr) {
  let count = 0;
  arr.forEach((boolean) => {
    if (boolean === true) {
      count++;
    }
  });
  return count;
}

console.log(countTrue([true, false, false, true, false]));
