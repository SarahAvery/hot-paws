import styled from "styled-components";

const CalculatorStyled = styled.div`
  width: 500px;
  min-height: 500px;
  border: 1px solid black;

  .input-container {
    border: 1px solid black;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 20px 0;

    label {
      padding: 0 5px;
    }

    input {
      width: 100px;
    }

    input,
    select {
      padding: 4px 8px;
    }
  }

  .error-msg {
    height: 18px;
    padding-top: 10px;
    width: 100%;
    font-size: 14px;
    color: #ff0000;
  }

  .submit-container {
    padding-bottom: 10px;
    border-bottom: 1px solid red;

    button {
      padding: 4px 8px;
      font-size: inherit;
    }
  }

  .temp-container {
    display: flex;
  }
`;

const TempContainer = styled.div`
  width: 50%;
  margin-top: 20px;
`;

export { CalculatorStyled, TempContainer };
