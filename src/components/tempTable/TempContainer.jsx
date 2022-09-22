import Scale from "../scale/Scale";
import { TempRowStyled, TempContainerStyled } from "./styles";

const TempRow = ({ temp, measurement }) => {
  return (
    <TempRowStyled>
      <div className="img-container"></div>
      <div>{temp[0][0]}</div>
      <div className="temp">
        {temp[0][1]} &deg;{measurement}{" "}
      </div>
    </TempRowStyled>
  );
};

const TempContainer = ({ title, temperature, measurement }) => {
  console.log(title, temperature, measurement);
  return (
    <TempContainerStyled>
      <h2>{title}</h2>
      <Scale temperature={temperature} measurement={measurement} key={title} />
      {temperature.map((temp) => {
        return <TempRow temp={[temp]} measurement={measurement} key={[temp[1]]} />;
      })}
    </TempContainerStyled>
  );
};

export { TempContainer, TempRow };
