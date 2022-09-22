import styled from "styled-components";

const DisclaimerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;

  h2 {
    width: 100%;
    margin-bottom: 15px;
  }

  ul {
    width: 50%;
    text-align: left;

    &:last-child {
      border-left: 1px solid var(--white);
    }
  }

  li {
    padding: 5px 15px;
    list-style: none;
    line-height: 1.3;
  }

  @media only screen and (max-width: 620px) {
    display: block;

    ul {
      width: 100%;

      &:last-child {
        border-left: none;
      }
    }
  }
`;

export default DisclaimerStyled;
