import React, { forwardRef, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import contactTypo1 from "../asset/svg/Contact_typo1.svg";
import contactTypo2 from "../asset/svg/Contact_typo2.svg";

const StyledConTactTypo = styled.div`
  position: fixed;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;

  @media screen and (max-width: 768px) {
    top: ${(props) => props.top}px;
    left: ${(props) => props.left}px;
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
  }
`;
const ContactTypo = forwardRef((props, ref) => {
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
  let num = Number(props.num - 1);
  let contactTypoData = {};
  const initContactImg = [contactTypo1, contactTypo2];
  const initContactTypoWeb = [
    {
      left: 309.3848,
      top: 12.6182,
      width: 192.5723,
      height: 762.9521,
    },
    {
      left: 1584.3193,
      top: 289.5308,
      width: 194.2837,
      height: 792.3062,
    },
  ];
  const initContactTypoMobile = [
    {
      left: 0,
      top: 60,
      width: 76.8,
      height: 304,
    },
    {
      left: window.innerWidth - 76.8,
      top: window.innerHeight - 364,
      width: 76.8,
      height: 304,
    },
  ];

  if (window.innerWidth < 768) {
    contactTypoData = {
      top: initContactTypoMobile[num].top,
      left: initContactTypoMobile[num].left,
      width: initContactTypoMobile[num].width,
      height: initContactTypoMobile[num].height,
      src: initContactImg[num],
    };
  } else {
    contactTypoData = {
      top: initContactTypoWeb[num].top * (innerHeight / 1080),
      left: initContactTypoWeb[num].left * (innerWidth / 1920),
      width: initContactTypoWeb[num].width * (innerWidth / 1920),
      height:
        initContactTypoWeb[num].width *
        (innerWidth / 1920) *
        (initContactTypoWeb.height / initContactTypoWeb.width),
      src: initContactImg[num],
    };
  }

  return (
    <>
      <StyledConTactTypo
        ref={ref}
        top={contactTypoData.top}
        left={contactTypoData.left}
        width={contactTypoData.width}
        height={contactTypoData.height}
      >
        <img src={contactTypoData.src} />
      </StyledConTactTypo>
    </>
  );
});

export default ContactTypo;
