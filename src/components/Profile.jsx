import React, { useEffect, useState } from "react";
import styled from "styled-components";
import kakao from "../asset/svg/Contact_KakaoIcon.svg";
import instagram from "../asset/svg/Contact_InstaIcon.svg";
import mail from "../asset/svg/Contact_Mail.svg";
import title from "../asset/svg/Contact_Title.svg";
import photo from "../asset/svg/Contact_Photo.png";

const StyledContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  /* background-color: #15100c; */
  /* border: 1px solid; */

  @media screen and (max-width: 769px) and (min-width: 400px) {
    top: ${window.innerHeight / 2}px;
    left: ${window.innerWidth / 2}px;
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
  }

  @media screen and (max-width: 768px) {
    top: ${window.innerHeight / 2}px;
    left: ${window.innerWidth / 2}px;
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    transform: translate(-50%, -75%);
  }
`;
const StyledLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;
const StyledLink = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 7vh;
  margin-top: 12px;
  background-color: white;
  opacity: 0.8;
  /* border: 1px solid white; */
  border-radius: 3rem;
  /* background-color:
  border-radius: ; */
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 32px;
    margin-top: 6px;
    font-size: 10px;
  }
`;
const StyledTitle = styled.div`
  width: 80%;
  flex: 1;
`;

const StyledPhoto = styled.div`
  width: 31vh;
  height: 30vh;
  margin-top: 30px;
  background-image: url(${(props) => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  @media screen and (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;
const StyledPhotoContainer = styled.div`
  flex: ${(props) => props.flex};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledIntroduction = styled.div`
  color: white;
  padding: 0 10px;
  font-size: 1rem;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const StyledIconStyle = styled.div`
  position: absolute;
  left: 5vh;
  width: 5vh;
  height: 5vh;
  /* margin-left: 5vh; */
  background-image: url(${(props) => props.icon});
  background-repeat: no-repeat;
  @media screen and (max-width: 768px) {
    left: 15px;
    width: 20px;
    height: 20px;
  }
`;
const StyledTextStyle = styled.a`
  display: flex;
  color: black;
  width: 100%;
  /* margin: 0 auto; */
  text-decoration: none;
  text-align: center;
  font-size: 1.2rem;
  font-style: arial;

  justify-content: center;
  letter-spacing: 2px;
  @media screen and (max-width: 768px) {
    font-size: 1vw;
    letter-spacing: 0px;
  }
`;

const linkData = [
  {
    icon: mail,
    text: "qkrkaehf123@gmail.com",
    href: "",
  },
  {
    icon: kakao,
    text: "hyuke23",
    href: "http://qr.kakao.com/talk/H1x.hDJ.EgCxFQXnmDxuwmBrVFA-",
  },
  {
    icon: instagram,
    text: "@__stupidpotato",
    href: "https://instagram.com/__stupidpotato",
  },
];

const profileData = {
  text: "안녕하세요 strc회장 이성혁입니다. \n 모두가 함께 뛰는 그날까지 \n strc 파이팅~~!!",
};

const Title = (props) => {
  return (
    <StyledTitle>
      <img src={title}></img>
    </StyledTitle>
  );
};
const Photo = (props) => {
  return (
    <StyledPhotoContainer flex={4}>
      <StyledPhoto src={photo}></StyledPhoto>
      <StyledIntroduction>{profileData.text}</StyledIntroduction>
    </StyledPhotoContainer>
  );
};

const Link = ({ text, icon, href }) => {
  return (
    <>
      <StyledLink>
        <StyledIconStyle icon={icon} />
        <StyledTextStyle href={href}>{text}</StyledTextStyle>
      </StyledLink>
    </>
  );
};

const Profile = (props) => {
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
  let profileData = {};

  const initContactTypoWeb = {
    left: 787.0498,
    top: 141.0537,
    width: 538.3625,
    height: 823.6221,
  };
  const initContactTypoMobile = {
    left: 0,
    top: 0,
    width: 220,
    height: 300,
  };
  //   console.log(initContactTypoMobile);
  if (window.innerWidth < 768) {
    profileData = {
      top: initContactTypoMobile.top,
      left: initContactTypoMobile.left,
      width: initContactTypoMobile.width,
      height: initContactTypoMobile.height,
    };
  } else {
    profileData = {
      top: initContactTypoWeb.top * (innerHeight / 1080),
      left: initContactTypoWeb.left * (innerWidth / 1920),
      width: initContactTypoWeb.width * (innerWidth / 1920),
      height: initContactTypoWeb.height * (innerHeight / 1080),
    };
  }

  return (
    <>
      <StyledContainer
        left={profileData.left}
        top={profileData.top}
        width={profileData.width}
        height={profileData.height}
      >
        <Title />
        <Photo />
        <StyledLinkContainer>
          {linkData.map((data) => (
            <Link text={data.text} icon={data.icon} href={data.href} />
          ))}
        </StyledLinkContainer>
      </StyledContainer>
    </>
  );
};

export default Profile;
