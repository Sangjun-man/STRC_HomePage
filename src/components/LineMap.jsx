import ReactDOM from "react-dom";
import React, { useRef, useState, useEffect } from "react";
import styled, { css } from "styled-components";
import STRCLineMap from "../asset/svg/STRC_LineMap.svg";

const StyleLineMap = styled.div`
  position: fixed;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  top: ${(props) => {
    // console.log(props);
    return props.top;
  }}px;
  left: ${(props) => {
    // console.log(props.left);
    return props.left;
  }}px;
  z-index: 5;
  align-items: center;
  justify-contents: center;
`;

const StyledMapMenu = styled.a`
  font-size: ${(props) => {
    return props.fontSize;
  }}px;
  color: white;
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
`;

//styled-component 라인 지도
const LineMapMenu = ({ children, top, left, fontSize, scrollTo }) => {
  return (
    <StyledMapMenu
      top={top}
      left={left}
      fontSize={fontSize}
      onClick={() => window.scrollTo(scrollTo)}
    >
      {children}
    </StyledMapMenu>
  );
};

//라인맵 컴포넌트
const LineMap = () => {
  const [innerWidth, setInnerWidth] = useState();
  const [innerHeight, setInnerHeight] = useState();
  useEffect(() => {
    setInnerWidth(window.innerWidth);
    setInnerHeight(window.innerHeight);
    window.addEventListener("resize", () => {
      console.log(window.innerWidth, window.innerHeight);
      setInnerWidth(window.innerWidth);
      setInnerHeight(window.innerHeight);
    });
  }, []);

  const initLineMap = {
    left: 340.1066,
    top: 251,
    width: 1218.4324,
    height: 738.4213,
  };
  const LineMap = {
    left: initLineMap.left * (innerWidth / 1920),
    top: initLineMap.top * (innerHeight / 1080),
    width: initLineMap.width * (innerWidth / 1920),
    height: initLineMap.width * (innerWidth / 1920) * 0.606,
  }; //전체 브라우저 크기에서 width와 height 정해짐

  const MenuData = {
    //1920, 1080 기준
    //라인맵 크기 -> 1152 × 495
    //좌표 기준을 라인맵 시작점으로 맞추기 (471.65 - 331.32)
    //각각의 글씨 위치
    About: {
      left: ((666.8428 - initLineMap.left) / initLineMap.width) * LineMap.width,
      top: ((305.1909 - initLineMap.top) / initLineMap.height) * LineMap.height,
      fontSize: 25,
    },
    Start: {
      left:
        ((1250.3916 - initLineMap.left) / initLineMap.width) * LineMap.width,
      top: ((307.4556 - initLineMap.top) / initLineMap.height) * LineMap.height,
      fontSize: 44,
    },
    Community: {
      left: ((904.5049 - initLineMap.left) / initLineMap.width) * LineMap.width,
      top: ((951.394 - initLineMap.top) / initLineMap.height) * LineMap.height,
      fontSize: 25,
    },
    Gallery: {
      left: ((370.9561 - initLineMap.left) / initLineMap.width) * LineMap.width,
      top: ((699.3384 - initLineMap.top) / initLineMap.height) * LineMap.height,
      fontSize: 25,
    },
    Contact: {
      left:
        ((1431.5244 - initLineMap.left) / initLineMap.width) * LineMap.width,
      top: ((663.2041 - initLineMap.top) / initLineMap.height) * LineMap.height,
      fontSize: 25,
    },
  };

  const [About, Start, Community, Contact, Gallery] = [
    MenuData.About,
    MenuData.Start,
    MenuData.Community,
    MenuData.Contact,
    MenuData.Gallery,
  ];

  return (
    <>
      <StyleLineMap
        top={LineMap.top}
        left={LineMap.left}
        width={LineMap.width}
        height={LineMap.height}
      >
        <LineMapMenu
          top={About.top}
          left={About.left}
          fontSize={About.fontSize}
          scrollTo={{
            top: 0,
            behavior: "smooth",
          }}
        >
          {" "}
          About
        </LineMapMenu>
        <LineMapMenu
          top={Start.top}
          left={Start.left}
          fontSize={Start.fontSize}
        >
          Start
        </LineMapMenu>
        <LineMapMenu
          top={Community.top}
          left={Community.left}
          fontSize={Community.fontSize}
        >
          Community
        </LineMapMenu>
        <LineMapMenu
          top={Gallery.top}
          left={Gallery.left}
          fontSize={Gallery.fontSize}
        >
          Gallery
        </LineMapMenu>
        <LineMapMenu
          top={Contact.top}
          left={Contact.left}
          fontSize={Contact.fontSize}
        >
          Contact
        </LineMapMenu>
        <img src={STRCLineMap}></img>
      </StyleLineMap>
    </>
  );
};

export default LineMap;
