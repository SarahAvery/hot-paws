import styled from "styled-components";

const ScaleStyled = styled.div`
  width: 100%;
  height: 16px;
  background: rgb(64, 199, 56);
  background: linear-gradient(90deg, rgba(64, 199, 56, 1) 0%, rgba(255, 253, 59, 1) 33%, rgba(255, 0, 0, 1) 100%);
  display: flex;
  align-items: center;
  border: 0.5px solid #808080;

  border-radius: 10px;
  margin-bottom: 10px;
`;

const PointerStyled = styled.div`
  height: 150%;
  width: 6px;
  border-radius: 4px;
  border: 0.5px solid #000;
  background-color: #302d2d;
  position: relative;

  left: calc(${(props) => props.number}% - 7px);
  transition: left 1s ease;
`;

export { ScaleStyled, PointerStyled };
