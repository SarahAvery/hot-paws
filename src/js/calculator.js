const ferToCel = (f) => {
  // 50f = 10c
  const equation = Math.floor(((f - 32) * (5 / 9) * 100) / 100);
  return equation;
};

const celToFer = (c) => {
  // 30c = 86f
  const equation = (Math.floor(c * 1.8 + 32) * 100) / 100;
  return equation;
};

const pavementTemp = (value, measurement) => {
  const temp = Number(value);

  if (measurement === "C") {
    const cTemp = celToFer(temp);
    const temps = calcF(cTemp);

    return temps;
  } else {
    const temps = calcF(temp);
    return temps;
  }

  function calcF(value) {
    const temp = value;

    let sunny = (temp * temp) / 67;
    let cloudy = (temp * temp) / 87;

    let sunnyDiff = sunny - temp;
    let cloudyDiff = cloudy - temp;

    sunnyDiff < 20 && (sunnyDiff = 20);
    sunnyDiff > 60 && (sunnyDiff = 60);
    cloudyDiff < 10 && (cloudyDiff = 10);
    cloudyDiff > 60 && (cloudyDiff = 60);

    let sunnyTemp = (temp + sunnyDiff).toFixed(0);
    let cloudyTemp = (temp + cloudyDiff).toFixed(0);

    if (measurement === "C") {
      sunnyTemp = ferToCel(sunnyTemp);
      cloudyTemp = ferToCel(cloudyTemp);
    }

    const temps = [
      ["Sunny", sunnyTemp],
      ["Cloudy", cloudyTemp]
    ];

    return temps;
  }
};

const asphaltTemp = (value, measurement) => {
  const temp = Number(value);

  if (measurement === "C") {
    const cTemp = celToFer(temp);
    const temps = calcF(cTemp);

    return temps;
  } else {
    const temps = calcF(temp);

    return temps;
  }

  function calcF(value) {
    const temp = value;

    let sunny = (temp * temp) / 67;
    let cloudy = (temp * temp) / 87;

    let sunnyDiff = sunny - temp;
    let cloudyDiff = cloudy - temp;

    //  87 25.9 0 = 143 123
    sunnyDiff > 25 && (sunnyDiff = 57);
    cloudyDiff >= 0 && (cloudyDiff = 41);

    // 86 24 -0.9 = 135 115
    sunnyDiff < 25 && (sunnyDiff = 49);

    //   77 11 -8 = 125  105
    sunnyDiff < 12 && (sunnyDiff = 48);
    cloudyDiff < 0 && (cloudyDiff = 29);

    let sunnyTemp = (temp + sunnyDiff).toFixed(0);
    let cloudyTemp = (temp + cloudyDiff).toFixed(0);

    if (measurement === "C") {
      sunnyTemp = ferToCel(sunnyTemp);
      cloudyTemp = ferToCel(cloudyTemp);
    }

    const temps = [
      ["Sunny", sunnyTemp],
      ["Cloudy", cloudyTemp]
    ];

    return temps;
  }
};

export { ferToCel, celToFer, pavementTemp, asphaltTemp };
