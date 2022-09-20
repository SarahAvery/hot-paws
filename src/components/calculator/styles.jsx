import styled from "styled-components";

const CalculatorStyled = styled.div`
  width: 500px;
  min-height: 500px;
  border: 1px solid black;
  border-radius: 10px;
  background: rgb(215, 232, 235);
  background: linear-gradient(
    150deg,
    rgba(215, 232, 235, 1) 0%,
    rgba(245, 245, 245, 1) 35%,
    rgba(251, 251, 251, 1) 100%
  );

  .input-container {
    /* border-top: 1px solid black; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 20px 0;

    label {
      padding: 0 5px;
    }

    input {
      width: 80px;
    }

    input,
    select {
      padding: 4px 10px;
      outline: none;
      border: 1px solid #999;

      &:focus-visible {
        outline: 0.5px solid #2070d1;
      }
    }

    input,
    ul.dropdown {
      font-size: 15px;
      height: 28px;
    }

    /* dropdown */
    ul.dropdown {
      outline: none;
      list-style: none;
      width: 100%;
      text-align: left;
      background-color: white;
    }

    ul.dropdown li.selected {
      width: 80px;
      border: 1px solid #999;
      padding: 4px 10px;

      &:hover {
        border: 1px solid #2070d1;
      }
    }

    li.selected div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .arrow-down {
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 5px solid black;
    }

    li {
      display: block;
      position: relative;
      text-decoration: none;
    }

    ul li ul {
      border: 1px solid #2070d1;
      background: white;
      visibility: hidden;
      opacity: 0;
      min-width: 5rem;
      position: absolute;
      transition: all 0.5s ease;
      margin-top: 4px;
      left: -1px;
      display: none;
      min-width: 125px;

      li {
        padding: 4px 10px;
      }
      li:hover {
        background-color: #2070d1;
        color: white;
        cursor: pointer;
      }
    }

    ul li:hover > ul,
    ul li:focus-within > ul,
    ul li ul:hover {
      visibility: visible;
      opacity: 1;
      display: block;
    }

    ul li ul li {
      width: 100%;
    }
  }

  .error-msg {
    height: 18px;
    /* padding-top: 10px; */
    margin-bottom: 10px;
    width: 100%;
    font-size: 14px;
    color: #ff0000;
  }

  .submit-container {
    /* padding-bottom: 20px; */
    /* border-bottom: 1px solid black; */
    /* padding: 4px 10px; */

    button {
      padding: 4px 8px;
      font-size: inherit;
      border-radius: 10px;
      background-color: #2070d1;
      color: white;
      border: 1px solid #999;
      cursor: pointer;

      &:disabled {
        background-color: #cccccc;
        cursor: auto;
      }
    }
  }

  .current-temp {
    margin: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    &::after {
      position: absolute;
      content: "";
      width: 15%;
      border-bottom: 1px solid gray;
      height: 24px;
    }

    span {
      font-weight: bold;
      padding-left: 3px;
    }
  }

  .temp-container {
    border-top: 1px solid black;
    display: flex;
    flex-wrap: wrap;

    .containers {
      width: 100%;
    }
  }

  .img-break {
    border-bottom: 1px solid black;
    height: 150px;
    width: 100%;
    background-image: url(/img/beach.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export { CalculatorStyled };
