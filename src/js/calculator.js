import { celToFer, ferToCel } from "./utils";

const concreteTemp = (value, measurement) => {
  const temp = Number(value);

  if (measurement === "C") {
    const cTemp = celToFer(temp);
    const temps = tempInF(cTemp);

    return temps;
  } else {
    const temps = tempInF(temp);
    return temps;
  }

  // Calculates the sun and shade temperatures in F
  function tempInF(value) {
    // y = AB^x
    // correlation coefficient R2 = 0.9962748692 (Closer R2 is to 1, the more accurate the model is)
    const a = 20.05308883;
    const b = 1.02022378;

    const sunnyTemp = Math.ceil(a * b ** value);
    const shadeTemp = Math.ceil(sunnyTemp - 7.5);

    const tempArr = [["Sun"], ["Shade"]];

    measurement === "C"
      ? tempArr[0].push(ferToCel(sunnyTemp)) && tempArr[1].push(ferToCel(shadeTemp))
      : tempArr[0].push(sunnyTemp) && tempArr[1].push(shadeTemp);

    return tempArr;
  }
};

const asphaltTemp = (value, measurement) => {
  const temp = Number(value);

  if (measurement === "C") {
    const temps = tempInF(celToFer(temp));

    return temps;
  } else {
    const temps = tempInF(temp);
    return temps;
  }

  // Calculates the sun and shade temperatures in F
  function tempInF(value) {
    // y = AB^x
    // correlation coefficient R2 = 0.99963223 (Closer R2 is to 1, the more accurate the model is)
    const a = 20.8455962;
    const b = 1.021498494;

    const sunnyTemp = Math.ceil(a * b ** value);
    const shadeTemp = Math.ceil(sunnyTemp - 8.5);

    const tempArr = [["Sun"], ["Shade"]];

    measurement === "C"
      ? tempArr[0].push(ferToCel(sunnyTemp)) && tempArr[1].push(ferToCel(shadeTemp))
      : tempArr[0].push(sunnyTemp) && tempArr[1].push(shadeTemp);

    return tempArr;
  }
};

export { concreteTemp, asphaltTemp };
