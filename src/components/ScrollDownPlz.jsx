import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const StyledScrollDown = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 50%;
  width: 6vh;
  height: 100%;
  font-size: 6.3vh;
  color: black;
  overflow: hidden;
  font-family: arial;
  font-weight: bold;
  z-index: 1000;
  /* transform: translate(-50%, -50%); */
  /* @media only screen and (max-width: 786px) {
    top: 20px;
    left: 20px;
  } */
`;

const ScrollDownPlz = React.forwardRef((props, ref) => {
  return (
    <>
      <StyledScrollDown ref={ref}>스크롤을 아래로 내려보세요</StyledScrollDown>
    </>
  );
});

export default ScrollDownPlz;
