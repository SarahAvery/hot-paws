import TempRowStyled from "./styles";

const TempRow = (props) => {
  const temp = props.temp;
  const measurement = props.measurement;

  return (
    <TempRowStyled>
      {/* <div>{temp[0][0]}</div>
      <div>
        {temp[0][1]} &deg;{measurement}
      </div> */}
      <div className="img-container"></div>
      <div>
        {temp[0][1]} &deg;{measurement}{" "}
      </div>
    </TempRowStyled>
  );
};

export default TempRow;
