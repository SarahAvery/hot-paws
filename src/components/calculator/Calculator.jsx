import { CalculatorStyled, TempContainer } from "./styles";

import { useState } from "react";
import { asphaltTemp, pavementTemp } from "../../js/calculator";
import TempRow from "../tempTable/TempTable";
import Scale from "../scale/Scale";

const numOnly = new RegExp(/^[0-9]+$/);

const Calculator = () => {
  // C of F
  const [measurement, setMeasurement] = useState("C");
  // Error
  const [error, setError] = useState("");
  // number value
  const [value, setValue] = useState();
  // Array of temps
  const [pavTemperature, setPavTemperature] = useState([]);
  const [asphaltTemperature, setAsphaltTemperature] = useState([]);
  // Submit disable
  const [submit, setSubmit] = useState(true);
  // Current temp - on submit
  const [currTemp, setCurrTemp] = useState([0, "C"]);

  const onTempChange = (e) => {
    setMeasurement(e);
    validate(String(value), e);
  };

  const onValueChange = (e) => {
    const newValue = e.target.value;
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

      if (temp === "C" && (num < 15) | (num > 45)) {
        setError("Must be between 15°C and 45°C");
        setSubmit(true);
      } else if (temp === "F" && (num < 45) | (num > 100)) {
        setError("Must be between 45°F and 100°F");
        setSubmit(true);
      } else {
        passed();
      }
    } else console.log("failed");
  };

  const onSubmitEvent = (e) => {
    e.preventDefault();
    setPavTemperature(pavementTemp(value, measurement));
    setAsphaltTemperature(asphaltTemp(value, measurement));
    setCurrTemp([value, measurement]);
  };

  return (
    <div className="flex-center">
      <CalculatorStyled>
        <h1>App Title</h1>
        <div className="input-container">
          <label htmlFor="temperture">Air Temperature:</label>
          <input type="number" name="temperture" id="temperture" onChange={(e) => onValueChange(e)} required />
          <label htmlFor="measurement"></label>
          <select name="measurement" id="measurement" onChange={(e) => onTempChange(e.target.value)}>
            <option value="C" defaultValue={"C"}>
              Celsius
            </option>
            <option value="F">Fahrenheit</option>
          </select>
          <div className="error-msg">{error && `${error}`}</div>
        </div>

        <div className="submit-container">
          <button type="submit" onClick={(e) => onSubmitEvent(e)} disabled={submit}>
            Calculate
          </button>
        </div>
        {/*  */}
        <div>
          Current Temp {currTemp[0]}&deg;{currTemp[1]}
        </div>
        {/*  */}
        <Scale></Scale>
        <div className="temp-container">
          {pavTemperature.length > 0 && (
            <TempContainer>
              <h2>Sidewalk</h2>
              {pavTemperature.map((temp) => {
                return <TempRow temp={[temp]} measurement={currTemp[1]} key={[temp[1]]} />;
              })}
            </TempContainer>
          )}
          {asphaltTemperature.length > 0 && (
            <TempContainer>
              <h2>Asphalt</h2>
              {asphaltTemperature.map((temp) => {
                return <TempRow temp={[temp]} measurement={currTemp[1]} key={[temp[1]]} />;
              })}
            </TempContainer>
          )}
        </div>
      </CalculatorStyled>
    </div>
  );
};

export default Calculator;
