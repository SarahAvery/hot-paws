import styled from "styled-components";

const CalculatorStyled = styled.div`
  width: 100%;
  min-height: calc(100vh - 50px);
  min-height: 80vh;
  display: flex;
  flex-wrap: wrap;

  section {
    padding: 20px;
  }

  .left-section {
    background: #1d1d1d;
    color: var(--white);
    border-top-left-radius: 10px;
    width: 45%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
  }

  .right-section {
    background-color: var(--white);
    color: #000000;
    border-top-right-radius: 10px;
    width: 55%;
    min-height: 500px;
  }

  .bottom-section {
    font-size: 14px;
    background: #4f4f4f;
    color: var(--white);
    width: 100%;
    border-radius: 0 0 10px 10px;
  }

  h1 {
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    &::after {
      position: absolute;
      content: "";
      width: 220px;
      border-bottom: 1.5px solid var(--white);
      height: calc(2rem + 5px);
    }
  }

  .intro {
    margin: 20px 0;

    p {
      margin: 10px 0;
    }
  }

  .calc-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    margin-bottom: 15px;
  }

  .submit-container,
  .current-temp {
    margin-top: 20px;
  }

  .input-container {
    display: flex;
    justify-content: center;
    align-items: end;

    label {
      padding-right: 8px;
    }

    input {
      width: 80px;
      margin-right: 8px;
    }

    input,
    select {
      padding: 4px 10px;
      outline: none;
      border: 1px solid #999;

      &:focus-visible {
        outline: 0.5px solid var(--blue);
      }
    }

    input,
    select {
      font-size: 15px;
      height: 28px;
      background-color: #fff;
    }
  }

  .error-msg {
    height: 14px;
    width: 100%;
    font-size: 14px;
    color: #ff0000;
    margin-bottom: 14px;
  }

  .submit-container {
    button {
      padding: 4px 8px;
      font-size: inherit;
      border-radius: 10px;
      background-color: var(--blue);
      color: var(--white);
      border: none;
      cursor: pointer;

      &:disabled {
        background-color: #cccccc;
        cursor: auto;
      }
    }
  }

  .current-temp {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    &::after {
      position: absolute;
      content: "";
      width: 160px;
      border-bottom: 1px solid var(--white);
      height: 20px;
    }

    span {
      font-weight: bold;
      padding-left: 3px;
    }
  }

  .temp-container {
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    .containers {
      width: 100%;

      &:first-child {
        margin-bottom: 10px;
      }

      &:last-child {
        margin-top: 10px;
      }
    }
  }

  .img-break {
    height: 150px;
    width: 100%;
    background-image: url(/img/beach2.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media only screen and ((max-width: 845px) and (min-width: 620px)) {
    .input-container {
      flex-wrap: wrap;

      label {
        width: 100%;
        padding-bottom: 10px;
        padding-right: 0;
      }
    }
  }
  @media only screen and (max-width: 620px) {
    display: block;

    .left-section,
    .right-section {
      width: 100%;
    }

    .left-section {
      border-top-right-radius: 10px;
    }
    .right-section {
      border-top-right-radius: 0;
      min-height: auto;
    }
    .temp-container {
      min-height: calc((125px * 2) + 150px + 20px);
    }
  }
`;

export { CalculatorStyled };
