import styled from "styled-components";

const TempContainerStyled = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  h2 {
    width: 100%;
    text-align: center;
    padding-bottom: 10px;
  }
`;

const TempRowStyled = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 0;

  &:last-child {
    border-left: 1px solid #a9a9a9;

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
  }

  div {
    margin: 5px;
    font-weight: bold;
  }
`;

export { TempRowStyled, TempContainerStyled };
