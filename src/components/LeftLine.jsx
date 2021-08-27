import React, { useEffect, useState } from "react";
import styled from "styled-components";
import STRCLeftLine from "../asset/svg/STRC_LeftLine.svg";

const StyledLeftLine = styled.div`
  display: ${(props) => {
    return props.width < props.height ? `none` : `block`;
  }};
  position: fixed;
  top: ${(props) => {
    // console.log(props);
    return props.top;
  }}px;
  left: ${(props) => {
    // console.log(props.left);
    return props.left;
  }}px;
  z-index: 9;
`;

const LeftLine = (props) => {
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

  const initLeftLine = {
    left: 56.1695, //0.052
    top: 0,
    width: 160, //0.149
    height: 1080,
  };
  const LeftLine = {
    left: innerWidth * 0.052,
    top: 0,
    width: innerWidth * 0.149,
    height: innerHeight,
  }; //전체 브라우저 크기에서 width와 height 정해짐
  return (
    <>
      <StyledLeftLine
        top={LeftLine.top}
        left={LeftLine.left}
        width={innerWidth}
        height={innerHeight}
      >
        <img
          src={STRCLeftLine}
          height={LeftLine.height}
          width={LeftLine.width}
        ></img>
      </StyledLeftLine>
    </>
  );
};
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
