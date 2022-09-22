import { CalculatorStyled } from "./styles";
import { useState } from "react";
import { asphaltTemp, concreteTemp } from "../../js/calculator";
import { TempContainer } from "../tempTable/TempContainer";
import AnimateHeight from "react-animate-height";
import Disclaimer from "../disclaimer/Disclaimer";

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
    } else return;
  };

  const onSubmitEvent = (e) => {
    e.preventDefault();
    setConcreteTemperature(concreteTemp(value, measurement));
    setAsphaltTemperature(asphaltTemp(value, measurement));
    setCurrTemp([value, measurement]);
    setHeight("auto");
  };

  return (
    <CalculatorStyled>
      <section className="left-section">
        <h1>Hot Paws</h1>
        <div className="intro">
          <p>Is it too hot out?</p>
          <p>A calculator to determine if a walk may hurt your dogs paws</p>
        </div>
        <div className="calc-container" data-testid="calc-container">
          <div className="error-msg">{error && `${error}`}</div>
          <div className="input-container">
            <label htmlFor="temperture">Air Temperature:</label>
            <input
              type="number"
              name="temperture"
              id="temperture"
              data-testid="temp-input"
              onChange={(e) => onValueChange(e.target.value)}
              required
            />
            <select name="degree" id="degree" data-testid="select" onChange={(e) => onTempChange(e.target.value)}>
              <option default data-testid="Cel" value="C">
                &deg;C
              </option>
              <option data-testid="F" value="Fahr">
                &deg;F
              </option>
            </select>
          </div>
          <div className="submit-container">
            <button
              type="submit"
              data-testid="button"
              onClick={(e) => onSubmitEvent(e)}
              disabled={submit}
              aria-expanded={height !== 0}
            >
              Calculate
            </button>
          </div>
          <div className="current-temp" data-testid="current-temp">
            Current Temp:
            <span>
              {currTemp[0]}&deg;{currTemp[1]}
            </span>
          </div>
        </div>
      </section>

      <section className="right-section">
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
      </section>
      <section className="bottom-section">
        <Disclaimer />
      </section>
    </CalculatorStyled>
  );
};

export default Calculator;
