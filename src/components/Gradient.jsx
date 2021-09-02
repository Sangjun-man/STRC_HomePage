import React, { forwardRef, useRef } from "react";
import styled from "styled-components";

const StyledGradient = styled.div`
  position: fixed;
  width: 80%;
  height: 100%;
  top: 0%;
  left: -50%;
  background: linear-gradient(
    to right,
    rgba(30, 19, 38, 1) 25%,
    transparent 100%
  );
  z-index: 7;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 80%;
    top: 100%;
    left: 0%;
    background: linear-gradient(
      to top,
      rgba(30, 19, 38, 1) 25%,
      transparent 100%
    );
  }
`;

const Gradient = forwardRef((props, ref) => {
  return (
    <>
      <StyledGradient ref={ref}></StyledGradient>
    </>
  );
});
export default Gradient;
