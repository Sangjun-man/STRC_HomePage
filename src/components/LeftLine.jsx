import React, { forwardRef, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import STRCLeftLine from "../asset/svg/STRC_LeftLine.svg";
const StyledLeftLine = styled.div`
  display: ${(props) => {
    return props.innerWidth < props.height ? `none` : `block`;
  }};

  width: ${(props) => props.width + props.left + 30}px;
  height: ${(props) => props.height}px;

  ${(props) => {
    //포지션 fixed냐 Relative냐에 따라서, topleft 수정 / margin-left 수정
    switch (props.position) {
      case "relative":
        return css`
          position: relative;
          margin-left: ${(props) => props.left}px;
        `;
      default:
        return css`
          position: fixed;
          top: ${(props) => props.top}px;
          left: ${(props) => props.left}px;
        `;
    }
  }}

  z-index: 9;
  background-image: url(${STRCLeftLine});
  background-repeat: no-repeat;
  background-size: auto 100%;
`;

// const  =

const LeftLine = forwardRef((props, ref) => {
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

  const initLeftLine = {
    left: 56, //0.052
    top: 0,
    width: 163, //0.149
    height: 1080,
  };
  const LeftLineData = {
    left: (initLeftLine.left * innerWidth) / 1920,
    top: 0,
    width: (initLeftLine.width * innerWidth) / 1920,
    innerWidth: innerWidth,
    height: innerHeight,
  }; //전체 브라우저 크기에서 width와 height 정해짐
  // console.log(LeftLineData);
  return (
    <>
      <StyledLeftLine
        ref={ref}
        top={LeftLineData.top}
        left={LeftLineData.left}
        width={LeftLineData.width}
        height={LeftLineData.height}
        innerWidth={LeftLineData.innerWidth}
        position={props.position}
      ></StyledLeftLine>
    </>
  );
});
export default LeftLine;

// const StyledLeftLine = styled.div`
//   width:3px;
//   height:100%;
//   position:fixed;
//   top:0px;
//   left:10%;
//   background-color:white;
// `

// const LeftCircle = styled.div`
//   width:30px;
//   height:30px;
//   border-radius: 15px;
//   background-color: white;
// `
// const LeftLineMenu = styled.div`
//   font-size:3vw;
//   position:fixed;
//   top:${props => props.top}%;
//   color: white;
// `

// const StyledLeftLineMenu = ({ children}) => {

//     return (
//         <LeftLineMenu>
//             <Leftcircle />
//             {children}
//         </LeftLineMenu>
//     );
// }

// const LeftLine = (props) => {
//     const CompData = {
//         about: {},
//         contact: {},
//         activity: {},

//     }

//   return (
//     <>
//     <LeftLine />
//           <StyledLeftLineMenu />
//     </>
//   );
// };
// export default LeftLine;

//svg파일로 대체
