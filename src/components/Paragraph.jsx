import React, { forwardRef, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import AboutParagraph from "../asset/svg/About_Paragraph.svg";

const StyledParagraph = styled.div`
  ${(props) => console.log(props)}
  position: fixed;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;

  @media screen and (max-width: 768px) {
    bottom: 60px;
    left: 30px;
  }
`;
const Paragraph = (props) => {
  let paraGraphData = {};
  const initParagraphWeb = {
    left: 297.9487,
    top: 654.0342,
    width: 693.2993,
    height: 318.4233,
  };
  const initParagraphMobile = {
    // left: 297.9487,
    // top: 654.0342,
    width: 250,
    // height: 318.4233,
  };

  if (window.innerWidth < 768) {
    paraGraphData = {
      top: initParagraphMobile.top,
      left: initParagraphMobile.left,
      width: initParagraphMobile.width,
      height: initParagraphMobile.height,
    };
  } else {
    paraGraphData = {
      top: initParagraphWeb.top,
      left: initParagraphWeb.left,
      width: initParagraphWeb.width,
      height: initParagraphWeb.height,
    };
  }

  return (
    <>
      <StyledParagraph
        top={paraGraphData.top}
        left={paraGraphData.left}
        width={paraGraphData.width}
        height={paraGraphData.height}
      >
        <img src={AboutParagraph} />
      </StyledParagraph>
    </>
  );
};

export default Paragraph;
