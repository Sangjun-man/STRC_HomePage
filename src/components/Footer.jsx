import { props } from "bluebird";
import React from "react";
import styled, { css } from "styled-components";
import STRCLogo from "../asset/svg/STRC_Logo.svg";

const footerColor = "#DA691E";

const StyledFooter = styled.div`
  position: fixed;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  padding: 0 5vh;
  align-items: center;
  bottom: 0;
  width: 100%;
  height: 12.5vh;
  z-index: 10;
  background-color: #da691e;

  @media screen and (max-width: 768px) {
    padding: 0 3vh;
    height: 10vh;
  }
`;

const StyledText = styled.div`
  color: white;
  font-size: 16px;
  letter-spacing: -1px;
  text-align: center;
  margin-left: ${(props) => props.right && "auto"};
  ${(props) =>
    props.large &&
    css`
      display: inline-block;
      font-size: 22px;
      @media screen and (max-width: 768px) {
        width: 55px;
      }
    `};

  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const StyledLogo = styled.div`
  width: 150px;
  margin: 0 30px;
  height: 38px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.src});
  @media screen and (max-width: 768px) {
    box-sizing: border-box;
    margin: 0 5px;
    width: 80px;
    height: 16.64px;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  /* just */
  flex: ${(props) => props.flex};
  ${(props) =>
    props.teams &&
    css`
      position: absolute;
      left: 60px;
      /* flex-shrink:1; */
      display: block;
      width: 134px;
      @media screen and (max-width: 768px) {
        position: static;
        left: 3vh;
        width: 60px;
      }
    `}

  ${(props) =>
    props.text &&
    css`
      display: flex;

      width: 134px;
      @media screen and (max-width: 768px) {
        width: 70px;
      } ;
    `}


  ${(props) =>
    props.center &&
    css`
      display: flex;
      justify-content: center;
      margin: 5px 0;
      width: 100%;
    `}
    ${(props) =>
    props.copyright &&
    css`
      position: absolute;
      right: 60px;
      min-width: 200px;
      @media screen and (max-width: 768px) {
        position: static;
        display: flex;
        justify-content: center;
      }
    `}

    ${(props) =>
    props.responsive &&
    css`
      @media screen and (max-width: 768px) {
        display: block;
        /* min-width: 200px; */
      }
    `}
`;

const Teams = ({ roll, text }) => {
  const rollData = ["FrontEnd", "BackEnd", "Designer"];
  const textData = ["이상준", "조인혁", "김수민"];
  return (
    <>
      <StyledContainer teams>
        <StyledContainer text>
          <StyledText>{rollData[0]} </StyledText>
          <StyledText right>{textData[0]}</StyledText>
        </StyledContainer>
        <StyledContainer text>
          <StyledText>{rollData[1]}</StyledText>
          <StyledText right>{textData[1]}</StyledText>
        </StyledContainer>
        <StyledContainer text>
          <StyledText>{rollData[2]}</StyledText>
          <StyledText right>{textData[2]}</StyledText>
        </StyledContainer>
      </StyledContainer>
    </>
  );
};
const CenterText = (props) => {
  return (
    <>
      <StyledContainer center>
        <StyledText large>Seoul Tech</StyledText>
        <StyledLogo src={STRCLogo}></StyledLogo>
        <StyledText large>Running Crew</StyledText>
      </StyledContainer>
    </>
  );
};
const CopyRights = (props) => {
  return (
    <>
      <StyledContainer copyright>
        <StyledText>STRC. 2021 All rights reserved</StyledText>
      </StyledContainer>
    </>
  );
};
const Footer = (props) => {
  return (
    <>
      <StyledFooter>
        <Teams />
        <StyledContainer flex={1} responsive>
          <CenterText />
          <CopyRights />
        </StyledContainer>
      </StyledFooter>
    </>
  );
};
export default Footer;
