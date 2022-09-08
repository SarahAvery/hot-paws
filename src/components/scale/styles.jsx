import styled from "styled-components";

const ScaleStyled = styled.div`
  width: 100%;
  height: 30px;
  background: rgb(64, 199, 56);
  background: linear-gradient(90deg, rgba(64, 199, 56, 1) 0%, rgba(255, 253, 59, 1) 50%, rgba(255, 0, 0, 1) 100%);
  display: flex;
  align-items: center;
`;

const PointerStyled = styled.div`
  height: 100%;
  width: 8px;
  border: 0.5px solid black;
  background-color: #302d2d;
  position: relative;
  left: calc(${(props) => props.number}% - 4.5px);
`;

export { ScaleStyled, PointerStyled };
