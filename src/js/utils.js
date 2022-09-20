const ferToCel = (f) => {
  const equation = Math.floor(((f - 32) * (5 / 9) * 100) / 100);
  return equation;
};

const celToFer = (c) => {
  const equation = (Math.floor(c * 1.8 + 32) * 100) / 100;
  return equation;
};

const findAverage = (arr) => {
  let numbers = [];
  for (var i = 0; i < arr.length; i++) {
    let parentArr = arr[i];
    for (var j = 1; j < parentArr.length; j++) {
      numbers.push(parentArr[1]);
    }
  }
  const sum = numbers.reduce((a, b) => a + b, 0);
  const average = sum / numbers.length || 0;

  return average;
};

export { ferToCel, celToFer, findAverage };
