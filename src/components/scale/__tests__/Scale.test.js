import pawCalculator from "../../../js/scale";
import { findAverage } from "../../../js/utils";
import Scale from "../Scale";
const { render } = require("@testing-library/react");

const title = "Sidewalk";

const temperature = [
  ["Sun", 26],
  ["Shade", 22]
];

const measurement = "C";

describe("Scale Component", () => {
  it("Renders", () => {
    render(<Scale temperature={temperature} measurement={measurement} key={title} />);
  });

  it("Scale offset", () => {
    const tempAverage = findAverage(temperature);

    const offset = pawCalculator(tempAverage, measurement);

    expect(offset).toEqual("23");
  });
});
