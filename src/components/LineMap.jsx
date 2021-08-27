import ReactDOM from "react-dom";
import React, { useRef, useState, useEffect } from "react";
import styled, { css } from "styled-components";
import STRCLineMap from "../asset/svg/STRCLineMap.svg";

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
  ${(props) => console.log(props)}
  font-size: ${(props) => {
    return props.px;
  }}px;
  color: white;
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
`;

//styled-component 라인 지도
const LineMapMenu = ({ children, top, left, px, scrollTo }) => {
  return (
    <StyledMapMenu
      top={top}
      left={left}
      px={px}
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
    left: 331.32,
    top: 395.32,
    width: 1152,
    height: 494.75,
  };
  const LineMap = {
    left: (331.32 / 1920) * innerWidth,
    top: (395.32 / 1080) * innerHeight,
    width: innerWidth * 0.6,
    height: innerWidth * 0.6 * 0.43,
  }; //전체 브라우저 크기에서 width와 height 정해짐

  const MenuData = {
    //1920, 1080 기준
    //라인맵 크기 -> 1152 × 495
    //좌표 기준을 라인맵 시작점으로 맞추기 (471.65 - 331.32)
    //각각의 글씨 위치
    About: {
      left: ((471.65 - initLineMap.left) / initLineMap.width) * LineMap.width,
      top: ((362.87 - initLineMap.top) / initLineMap.height) * LineMap.height,
      fontSize: 44,
    },
    Activity: {
      left: ((320 - initLineMap.left) / initLineMap.width) * LineMap.width,
      top: ((820 - initLineMap.top) / initLineMap.height) * LineMap.height,
      fontSize: 44,
    },
    Community: {
      left: ((1480 - initLineMap.left) / initLineMap.width) * LineMap.width,
      top: ((675 - initLineMap.top) / initLineMap.height) * LineMap.height,
      fontSize: 44,
    },
    Gallery: {
      left: ((1160 - initLineMap.left) / initLineMap.width) * LineMap.width,
      top: ((363.22 - initLineMap.top) / initLineMap.height) * LineMap.height,
      fontSize: 44,
    },
    Contact: {
      left: ((950 - initLineMap.left) / initLineMap.width) * LineMap.width,
      top: ((790 - initLineMap.top) / initLineMap.height) * LineMap.height,
      fontSize: 44,
    },
  };

  const [About, Activity, Community, Contact, Gallery] = [
    MenuData.About,
    MenuData.Activity,
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
          px={About.px}
          scrollTo={{
            top: 0,
            behavior: "smooth",
          }}
        >
          About
        </LineMapMenu>
        <LineMapMenu top={Activity.top} left={Activity.left} px={Activity.px}>
          Activity
        </LineMapMenu>
        <LineMapMenu
          top={Community.top}
          left={Community.left}
          px={Community.px}
        >
          Community
        </LineMapMenu>
        <LineMapMenu top={Gallery.top} left={Gallery.left} px={Gallery.px}>
          Gallery
        </LineMapMenu>
        <LineMapMenu top={Contact.top} left={Contact.left} px={Contact.px}>
          Contact
        </LineMapMenu>
        <img src={STRCLineMap}></img>
      </StyleLineMap>
    </>
  );
};

export default LineMap;
