import { CalculatorStyled, TempContainer } from "./styles";

import { useState } from "react";
import { asphaltTemp, pavementTemp } from "../../js/calculator";
import TempRow from "../tempTable/TempTable";
import Scale from "../scale/Scale";

const numOnly = new RegExp(/^[0-9]+$/);

const Calculator = () => {
  const [measurement, setMeasurement] = useState("C");
  const [error, setError] = useState("");
  const [value, setValue] = useState(0);
  const [pavTemperature, setPavTemperature] = useState([]);
  const [asphaltTemperature, setAsphaltTemperature] = useState([]);
  const [submit, setSubmit] = useState(true);

  const onValueChange = (e) => {
    const value = e.target.value;
    validate(value);
  };

  const onTempChange = (e) => {
    setMeasurement(e);
    setPavTemperature(pavementTemp(value, e));
    setAsphaltTemperature(asphaltTemp(value, e));
  };

  const validate = (value) => {
    if (numOnly.test(value) && value.length <= 3 && Number(value)) {
      setError("");
      setSubmit(false);
      setValue(value);
    }
    if (value.length > 3) {
      setError("Maximum 3 digits");
      setSubmit(true);
    }
  };

  const onSubmitEvent = (e) => {
    e.preventDefault();
    setPavTemperature(pavementTemp(value, measurement));
    setAsphaltTemperature(asphaltTemp(value, measurement));
  };

  return (
    <div className="flex-center">
      <CalculatorStyled>
        <h1>App Title</h1>
        <div className="input-container">
          <label htmlFor="fahrenheit">Air Temperature:</label>
          <input type="number" name="fahrenheit" id="fahrenheit" onChange={(e) => onValueChange(e)} required />
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
        <Scale></Scale>
        <div className="temp-container">
          {pavTemperature.length > 0 && (
            <TempContainer>
              <h2>Sidewalk</h2>
              {pavTemperature.map((temp) => {
                return <TempRow temp={[temp]} measurement={measurement} key={[temp[1]]} />;
              })}
            </TempContainer>
          )}
          {asphaltTemperature.length > 0 && (
            <TempContainer>
              <h2>Asphalt</h2>
              {asphaltTemperature.map((temp) => {
                return <TempRow temp={[temp]} measurement={measurement} key={[temp[1]]} />;
              })}
            </TempContainer>
          )}
        </div>
      </CalculatorStyled>
    </div>
  );
};

export default Calculator;
