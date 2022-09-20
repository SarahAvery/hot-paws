import { CalculatorStyled } from "./styles";
import { useState } from "react";
import { asphaltTemp, concreteTemp } from "../../js/calculator";
import { TempContainer } from "../tempTable/TempContainer";
import AnimateHeight from "react-animate-height";

const numOnly = new RegExp(/^[0-9]+$/);

const Calculator = () => {
  const [measurement, setMeasurement] = useState("C");
  const [error, setError] = useState("");
  const [value, setValue] = useState();
  const [concreteTemperature, setConcreteTemperature] = useState([]);
  const [asphaltTemperature, setAsphaltTemperature] = useState([]);
  const [submit, setSubmit] = useState(true);
  const [currTemp, setCurrTemp] = useState([0, "C"]);
  const [height, setHeight] = useState(0);

  const duration = 300;

  const onTempChange = (e) => {
    setMeasurement(e);
    validate(String(value), e);

    console.log(e);
  };

  const onValueChange = (e) => {
    const newValue = e;
    validate(newValue, measurement);
    setValue(Number(newValue));
  };

  const passed = () => {
    setError("");
    setSubmit(false);
  };

  const validate = (value, temp) => {
    if (numOnly.test(value)) {
      const num = Number(value);

      if (temp === "C" && (num < 15) | (num > 40)) {
        setError("Must be between 15°C and 40°C");
        setSubmit(true);
      } else if (temp === "F" && (num < 60) | (num > 100)) {
        setError("Must be between 60°F and 100°F");
        setSubmit(true);
      } else {
        passed();
      }
    } else console.log("failed");
  };

  const onSubmitEvent = (e) => {
    e.preventDefault();
    setConcreteTemperature(concreteTemp(value, measurement));
    setAsphaltTemperature(asphaltTemp(value, measurement));
    setCurrTemp([value, measurement]);
    setHeight("auto");
  };

  return (
    <div className="flex-center">
      <div className="border">
        <CalculatorStyled>
          <h1>Hot Paws</h1>
          <div className="input-container">
            <div className="error-msg">{error && `${error}`}</div>

            <label htmlFor="temperture">Air Temperature:</label>
            <input
              type="number"
              name="temperture"
              id="temperture"
              onChange={(e) => onValueChange(e.target.value)}
              required
            />
            <label htmlFor="measurement"></label>
            <nav>
              <ul className="dropdown" name="measurement" id="measurement">
                <li className="selected">
                  <div>
                    <span className="deg">&deg;{measurement}</span>
                    <span className="arrow-down"></span>
                  </div>
                  <ul>
                    <li value="C" onClick={() => onTempChange("C")}>
                      Celsius (&deg;C)
                    </li>
                    <li value="F" onClick={() => onTempChange("F")}>
                      Fahrenheit (&deg;F)
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>

          <div className="submit-container">
            <button type="submit" onClick={(e) => onSubmitEvent(e)} disabled={submit} aria-expanded={height !== 0}>
              Calculate
            </button>
          </div>
          <div className="current-temp">
            Current Temp:
            <span>
              {currTemp[0]}&deg;{currTemp[1]}
            </span>
          </div>
          <div className="temp-container">
            <AnimateHeight className="containers" duration={duration} height={height}>
              {concreteTemperature.length > 0 && (
                <TempContainer title="Sidewalk" temperature={concreteTemperature} measurement={currTemp[1]} />
              )}
            </AnimateHeight>
            <div className="img-break" />
            <AnimateHeight className="containers" duration={duration} height={height}>
              {asphaltTemperature.length > 0 && (
                <TempContainer title="Asphalt" temperature={asphaltTemperature} measurement={currTemp[1]} />
              )}
            </AnimateHeight>
          </div>
          <div>Disclaimers Here</div>
        </CalculatorStyled>
      </div>
    </div>
  );
};

export default Calculator;
