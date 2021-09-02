import React, { useRef } from "react";
import styled from "styled-components";
import STRCLogoWhite from "../asset/svg/STRC_Logo.svg";
import STRCLogoColor from "../asset/svg/STRC_Logo_color.svg";
import { logoInfo } from "../style/data";

const StyledTopLogo = styled.div`
  display: block;
  position: fixed;
  top: 40px;
  right: 75px;
  width: 150px;
  z-index: 1000;

  @media only screen and (max-width: 786px) {
    width: 65px;
    top: 20px;
    left: 20px;
  }
`;

const STRCLogo = [STRCLogoWhite, STRCLogoColor];

const STRCLogoStyle = {
  width: "100%",
};

const TopLogo = React.forwardRef((props, ref) => {
  console.log(ref);
  // const container = useRef();
  // const whiteLogoRef = useRef();
  // const colorLogoRef = useRef();
  // console.log(container, colorLogoRef, whiteLogoRef);
  // logoInfo.topLogo.objs.container = container.current;
  // logoInfo.topLogo.objs.whiteLogo = whiteLogoRef.current;
  // logoInfo.topLogo.objs.colorLogo = colorLogoRef.current;
  return (
    <>
      <StyledTopLogo
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        ref={ref[0]}
      >
        <img src={STRCLogo[0]} ref={ref[1]} />
        <img src={STRCLogo[1]} ref={ref[2]} />
      </StyledTopLogo>
    </>
  );
});

export default TopLogo;
