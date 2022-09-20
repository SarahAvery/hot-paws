import pawCalculator from "../../js/scale";
import { findAverage } from "../../js/utils";
import { PointerStyled, ScaleStyled } from "./styles";

const Scale = ({ temperature, measurement }) => {
  const tempAverage = findAverage(temperature);

  const offset = pawCalculator(tempAverage, measurement);

  return (
    <ScaleStyled>
      <PointerStyled number={offset} />
    </ScaleStyled>
  );
};

export default Scale;
