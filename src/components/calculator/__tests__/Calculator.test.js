import userEvent from "@testing-library/user-event";
import Calculator from "../Calculator";
const { render, screen } = require("@testing-library/react");

describe("Calculator Component", () => {
  it("Renders", () => {
    render(<Calculator />);
  });

  it("Calc Container", () => {
    render(<Calculator />);

    const calcContainer = screen.getByTestId("calc-container");
    expect(calcContainer).toBeInTheDocument();

    expect(calcContainer).toHaveTextContent("Air Temperature:");
    expect(calcContainer).toHaveTextContent("Current Temp:");
  });

  it("Shows current temp", () => {
    render(<Calculator />);

    const button = screen.getByTestId("button");
    const currTemp = screen.getByTestId("current-temp");

    expect(button).toHaveAttribute("disabled");

    userEvent.type(screen.getByTestId("temp-input"), "20");
    expect(screen.getByDisplayValue("20")).toBeInTheDocument();

    userEvent.selectOptions(screen.getByTestId("select"), ["C"]);
    expect(screen.getByTestId("Cel").selected).toBe(true);

    expect(button).not.toHaveAttribute("disabled");

    userEvent.click(button);

    expect(currTemp).toHaveTextContent("20°C");
  });

  it("Button enabled & disabled colors", () => {
    render(<Calculator />);

    const button = screen.getByTestId("button");

    expect(button).toHaveStyle("background-color: rgb(204, 204, 204)");

    userEvent.type(screen.getByTestId("temp-input"), "20");

    userEvent.selectOptions(screen.getByTestId("select"), ["C"]);

    expect(button).not.toHaveStyle("background-color: rgb(204, 204, 204)");
  });
});
