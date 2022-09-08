import styled from "styled-components";

const TempRowStyled = styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;

  &:last-child {
    border-top: none;

    .img-container {
      background-image: url(/img/cloudy.png);
    }
  }

  .img-container {
    background-image: url(/img/sun.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 33%;
    height: 30px;

    /* margin: 8px auto; */
  }

  div {
    margin: 5px;
  }
`;

export default TempRowStyled;
