import React, { useRef } from "react";
import styled, { css } from "styled-components";
import STRCLogo from "../asset/svg/STRCLogo.svg";
const StyledTopLogo = styled.div`
  position: fixed;
  top: 20px;
  right: 30px;
  min-width: 100px;
  z-index: 1000;
  width: 10vw;

  ${css`
  div:hover {
    background-color: powderblue;
transition: background - color 0.5s;`}
  }
`;

const TopLogo = () => {
  const topLogo = useRef();
  return (
    <>
      <StyledTopLogo
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        ref={topLogo}
      >
        <img src={STRCLogo} />
      </StyledTopLogo>
    </>
  );
};

export default TopLogo;
