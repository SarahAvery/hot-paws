import { TempContainer } from "../TempContainer";
const { render } = require("@testing-library/react");

const concreteTemperature = [
  ["Sun", 26],
  ["Shade", 22]
];
const asphaltTemperature = [
  ["Sun", 31],
  ["Shade", 27]
];
const currTemp = [20, "C"];

describe("TempContainer Component", () => {
  it("Renders concrete temp", () => {
    const { container } = render(
      <TempContainer title="Sidewalk" temperature={concreteTemperature} measurement={currTemp[1]} />
    );

    const title = /sidewalk/i;
    expect(container).toHaveTextContent(title);
  });

  it("Renders asphalt temp", () => {
    const { container } = render(
      <TempContainer title="Asphalt" temperature={asphaltTemperature} measurement={currTemp[1]} />
    );

    const title = /asphalt/i;
    expect(container).toHaveTextContent(title);
  });
});
