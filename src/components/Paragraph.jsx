import React, { forwardRef, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import AboutParagraph from "../asset/svg/About_Paragraph.svg";

const StyledParagraph = styled.div`
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
const Paragraph = forwardRef((props, ref) => {
  const [innerWidth, setInnerWidth] = useState();
  const [innerHeight, setInnerHeight] = useState();
  useEffect(() => {
    setInnerWidth(window.innerWidth);
    setInnerHeight(window.innerHeight);
    window.addEventListener("resize", () => {
      // console.log(window.innerWidth, window.innerHeight);
      setInnerWidth(window.innerWidth);
      setInnerHeight(window.innerHeight);
    });
  }, []);
  let paraGraphData = {};
  const initParagraphWeb = {
    left: 297.9487,
    top: 654.0342,
    width: 693.2993,
    height: 318.4233,
  };
  const initParagraphMobile = {
    width: 250,
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
      top: initParagraphWeb.top * (innerHeight / 1080),
      left: initParagraphWeb.left * (innerWidth / 1920),
      width: initParagraphWeb.width * (innerWidth / 1920),
      height:
        initParagraphWeb.width *
        (innerWidth / 1920) *
        (initParagraphWeb.height / initParagraphWeb.width),
    };
  }

  return (
    <>
      <StyledParagraph
        ref={ref}
        top={paraGraphData.top}
        left={paraGraphData.left}
        width={paraGraphData.width}
        height={paraGraphData.height}
      >
        <img src={AboutParagraph} />
      </StyledParagraph>
    </>
  );
});

export default Paragraph;
