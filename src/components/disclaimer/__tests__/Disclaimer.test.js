import Disclaimer from "../Disclaimer";
const { render } = require("@testing-library/react");

describe("Disclaimer component", () => {
  it("Renders", () => {
    render(<Disclaimer />);
  });
});
