import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import STRC_FirstPageLogo from "../asset/svg/STRC_FirstPageLogo.svg";
import { sceneInfo } from "../style/data";

const StyledFirstPageLogo = styled.div`
  position: fixed;
  width: 750px;
  top: 50%;
  @media screen and (max-width: 768px) {
    width: 250px;
    left: 20px;
  }
  transform: translate(0, -50%);
`;
const STRCLogoStyle = {
  width: "100%",
};

const FirstPageLogo = (props) => {
  return (
    <>
      <StyledFirstPageLogo>
        <img src={STRC_FirstPageLogo} style={STRCLogoStyle}></img>
      </StyledFirstPageLogo>
    </>
  );
};

export default FirstPageLogo;
