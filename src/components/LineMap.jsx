import React, { useRef, useState, useEffect } from "react";
import styled, { css } from "styled-components";
import STRCLineMap from "../asset/svg/STRC_LineMap.svg";
import { layoutData } from "../style/data";

const StyledLineMap = styled.div`
  position: fixed;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  @media screen and (max-width: 768px) {
    transform: scale(1.4);
    top: ${(props) => props.top - 40}px;
  }
  z-index: 5;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: top;
`;

const StyledMapMenu = styled.a`
  font-size: ${(props) => props.fontSize}px;

  color: white;
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;

  @media screen and (max-width: 768px) {
    transform: translate(-20%, 70%) scale(0.8);
  }
  /* ${(props) => {
    if (props.translate) {
      let translate = props.translate;

      css`
        transform: translate;
      `;
    }
  }} */
`;

//styled-component 라인 지도
const LineMapMenu = ({
  children,
  top,
  left,
  fontSize,
  translate,
  scrollTo,
}) => {
  return (
    <StyledMapMenu
      top={top}
      left={left}
      fontSize={fontSize}
      onClick={() => window.scrollTo(scrollTo)}
      translate={translate}
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

  //현재 innerWIdth, innerHeight 비교해서 비율 줄여줄때 사용
  const currentLayoutRatio = {
    width: innerWidth / 1920,
    height: innerHeight / 1080,
  };

  // let originalLineMapRatio = initLineMap.height / initLineMap.width;

  // let widthModify;
  // let heightModify;
  //   const lineMapRatio
  // if (standardDeviceRatio < currentDeviceRatio) {
  //   // 기기 비율이 크면 height가 크다는말, 가로가 좁다, 가로를 기준으로 맞춰야함
  //   widthModify = innerWidth / 1920;
  //   // heightModify = (innerWidth / 1920) * originalLineMapRatio;
  //   initLineMap.width * currentLayoutRatio.width / initLineMap.width * initLineMap.height    *

  // }

  //실제 라인맵 크기
  //가로로좁을때, 세로로좁을때 비율 맞춰주기
  let standardDeviceRatio = 1920 / 1080;
  let currentDeviceRatio = innerWidth / innerHeight;
  const LineMap =
    standardDeviceRatio < currentDeviceRatio
      ? {
          //가로가 넓을때, 이미지는 가로크기 위치는 세로크기 기준으로 맞춰줌, 위치 디바이스 비율에 맞게 수정

          left:
            (innerWidth - initLineMap.width * currentLayoutRatio.height) / 2,
          top: initLineMap.top * currentLayoutRatio.height,
          width: initLineMap.width * currentLayoutRatio.height,
          height: initLineMap.height * currentLayoutRatio.height,
        }
      : {
          //가로가 좁을때  , 세로가 넓을때 -> 이미지 세로크기 기준으로 맞춰줌

          left: initLineMap.left * currentLayoutRatio.width,
          top: initLineMap.top * currentLayoutRatio.height,
          width: initLineMap.width * currentLayoutRatio.width,
          height: initLineMap.height * currentLayoutRatio.width,
        };
  //전체 브라우저 크기에서 width와 height 정해짐

  const LineMenuScaleRatio = {
    // left: LineMap.left / initLineMap.left,
    // top: LineMap.top / initLineMap.top,
    width: LineMap.width / initLineMap.width,
    height: LineMap.height / initLineMap.height, // initLinemap.height * inner
    // font: currentDeviceRatio / standardDeviceRatio,
  };

  const MenuData = {
    //1920, 1080 기준
    //라인맵 크기 -> 1152 × 495
    //좌표 기준을 라인맵 시작점으로 맞추기 (471.65 - 331.32)
    //각각의 글씨 위치
    About: {
      left: (645.8428 - initLineMap.left) * LineMenuScaleRatio.width,
      top: (300.1909 - initLineMap.top) * LineMenuScaleRatio.height,
      fontSize: (32 / initLineMap.height) * LineMap.height,
    },
    Start: {
      left:
        ((1250.3916 - initLineMap.left) / initLineMap.width) * LineMap.width,
      top: ((307.4556 - initLineMap.top) / initLineMap.height) * LineMap.height,
      fontSize: (44 / initLineMap.height) * LineMap.height,
    },
    Community: {
      left: ((904.5049 - initLineMap.left) / initLineMap.width) * LineMap.width,
      top: ((946.394 - initLineMap.top) / initLineMap.height) * LineMap.height,
      fontSize: (32 / initLineMap.height) * LineMap.height,
    },
    Gallery: {
      left: ((370.9561 - initLineMap.left) / initLineMap.width) * LineMap.width,
      top: ((695.3384 - initLineMap.top) / initLineMap.height) * LineMap.height,
      fontSize: (32 / initLineMap.height) * LineMap.height,
    },
    Contact: {
      left:
        ((1431.5244 - initLineMap.left) / initLineMap.width) * LineMap.width,
      top: ((663.2041 - initLineMap.top) / initLineMap.height) * LineMap.height,
      fontSize: (32 / initLineMap.height) * LineMap.height,
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
      <StyledLineMap
        top={LineMap.top}
        left={LineMap.left}
        width={LineMap.width}
        height={LineMap.height}
        src={STRCLineMap}
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
          About
        </LineMapMenu>
        <LineMapMenu
          top={Start.top}
          left={Start.left}
          fontSize={Start.fontSize}
          scrollTo={{
            top: 0,
            behavior: "smooth",
          }}
        >
          Start
        </LineMapMenu>
        <LineMapMenu
          top={Community.top}
          left={Community.left}
          fontSize={Community.fontSize}
          scrollTo={{
            top: 0,
            behavior: "smooth",
          }}
        >
          Community
        </LineMapMenu>
        <LineMapMenu
          top={Gallery.top}
          left={Gallery.left}
          fontSize={Gallery.fontSize}
          scrollTo={{
            top: 0,
            behavior: "smooth",
          }}
        >
          Gallery
        </LineMapMenu>
        <LineMapMenu
          top={Contact.top}
          left={Contact.left}
          fontSize={Contact.fontSize}
          scrollTo={{
            top: 0,
            behavior: "smooth",
          }}
        >
          Contact
        </LineMapMenu>
        {/* <img src={STRCLineMap}></img> */}
      </StyledLineMap>
    </>
  );
};

export default LineMap;
