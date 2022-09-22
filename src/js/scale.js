import { celToFer } from "./utils";

const pawCalculator = (tempAverage, measurement) => {
  const maxTemp = 125;
  const minTemp = 60;

  // Convert C to F
  const temp = measurement === "C" ? celToFer(tempAverage) : tempAverage;

  let offSet;

  if (temp >= maxTemp) {
    offSet = 100;
  } else if (temp <= minTemp) {
    offSet = 0;
  } else {
    offSet = ((temp - minTemp) * 100) / (maxTemp - minTemp);
  }

  return offSet.toFixed(0);
};

export default pawCalculator;
