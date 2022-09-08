import { useState } from "react";
import { PointerStyled, ScaleStyled } from "./styles";

const Scale = () => {
  // Scale needs to be a range
  // gradient background - green to red
  // arrow to show 'danger' level
  // scale based on paw temp

  const [offset, setOffset] = useState(50);

  return (
    <ScaleStyled>
      <PointerStyled number={offset} />
    </ScaleStyled>
  );
};

export default Scale;
