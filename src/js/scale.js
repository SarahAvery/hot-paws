// air 77 - 125 F destruction in 60 sec
// 86 - 135 F can fry an egg
//  ** Testing the surface with the back of your hand for 7 seconds, too hot?
//  Grass is cooler and should always be used if necessary to be outside when it is too hot out
//  Avoid walking during peak sun time - walk in the early morning or late evening if possible

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

  return offSet;
};

export default pawCalculator;
