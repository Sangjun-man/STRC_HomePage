import React from "react";
import styled, { css } from "styled-components";
import kakaoIcon from "../asset/svg/Last_KakaoIcon.svg";
import instaIcon from "../asset/svg/Last_InstaIcon.svg";
import thanks from "../asset/svg/Contact_Thanks.svg";
import pin from "../asset/svg/Last_Pin.svg";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: end;
  width: 50%;
  height: 87.5vh;
  margin: auto;
`;
const StyledKakao = styled.a`
  color: white;
  font-family: arial;
  font-size: 5.5vw;
  font-weight: bold;
  margin-bottom: 20vh;
  &:hover div img {
    transform: translate(-55%, 50%);
    transition: transform 1s;
  }
`;
const StyledIcon = styled.img`
  display: none;
  @media only screen and (max-width: 768px) {
    display: flex;
    src: ${(props) => props.src};
    width: 7vh;
  }
`;
const StyledIconContainer = styled.div`
  margin: 0 auto 2vh auto;
`;

const StyledInsta = styled.a`
  color: white;
  font-family: "arial";
  font-size: 5.5vw;
  font-weight: bold;
  margin-bottom: 10vh;
  &:hover div img {
    transform: translate(-55%, 50%);
    transition: transform 1s;
  }
`;

const StyledThanks = styled.div`
  /* width: 5vw; */
  height: 3vh;
  background-image: url(${thanks});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin-top: 1vh;
  margin-bottom: 5vh;

  @media screen and (max-width: 786px) {
    height: 10px;
    margin-top: 10vh;
    margin-bottom: 2vh;
  }
`;
const StyledPinContainer = styled.div`
  display: inline-block;
  overflow: hidden;
  width: 5vw;
  height: 5vw;
  @media only screen and (max-width: 768px) {
    position: fixed;
    display: none;
  }
`;
const StyledPin = styled.img`
  width: 4vw;
  height: 4vw;
  src: ${(props) => props.src};
`;

const Pin = (props) => {
  return (
    <>
      <StyledPinContainer>
        <StyledPin src={pin} />
      </StyledPinContainer>
    </>
  );
};

const Icons = (props) => {
  return (
    <>
      <StyledIconContainer>
        <StyledIcon src={props.src}></StyledIcon>
      </StyledIconContainer>
    </>
  );
};

const Kakao = (props) => {
  return (
    <>
      <Icons src={kakaoIcon}></Icons>
      <StyledKakao kakao>
        KAKAOTALK
        <Pin />
      </StyledKakao>
    </>
  );
};

const Insta = (props) => {
  return (
    <>
      <Icons src={instaIcon}></Icons>
      <StyledInsta insta>
        INSTAGRAM
        <Pin />
      </StyledInsta>
    </>
  );
};

const Thanks = (props) => {
  return (
    <>
      <StyledThanks></StyledThanks>
    </>
  );
};

const Links = (props) => {
  return (
    <>
      <StyledContainer>
        <Insta />
        <Kakao />
        <Thanks />
      </StyledContainer>
    </>
  );
};
export default Links;
