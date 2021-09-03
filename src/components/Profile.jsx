import React from "react";
import styled from "styled-components";
import kakao from "../asset/svg/Contact_KakaoIcon.svg";
import instagram from "../asset/svg/Contact_InstaIcon.svg";
import mail from "../asset/svg/Contact_Mail.svg";
import title from "../asset/svg/Contact_Title.svg";
import photo from "../asset/svg/Contact_Photo.svg";

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

  @media screen and (max-width: 768px) {
    /* top: ${(props) => props}px; */
    /* left: ${(props) => props.left}px; */
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
  height: 77px;
  margin-top: 12px;
  background-color: gray;
  /* border: 1px solid white; */
  border-radius: 3rem;
  /* background-color:
  border-radius: ; */
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 32px;
    margin-top: 6px;
  }
`;
const StyledTitle = styled.div`
  width: 80%;
  flex: 1;
`;

const StyledPhoto = styled.div`
  width: 329px;
  height: 312px;
  margin-top: 30px;
  background-image: url(${(props) => props.src});
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
  left: 50px;
  width: 50px;
  height: 50px;
  background-image: url(${(props) => props.icon});
  background-repeat: no-repeat;
  flex: 1;
  @media screen and (max-width: 768px) {
    left: 15px;
    width: 20px;
    height: 20px;
  }
`;
const StyledTextStyle = styled.div`
  display: flex;
  color: black;
  text-decoration: none;
  text-align: center;
  font-size: 1.2rem;
  justify-content: center;
  letter-spacing: 2px;
  @media screen and (max-width: 768px) {
    font-size: 1px;
    letter-spacing: 0px;
  }

  flex: 3;
`;

const linkData = [
  {
    icon: mail,
    text: "tmxl17@naver.com",
    href: "http",
  },
  { icon: kakao, text: "카카오톡 아이디", href: "" },
  {
    icon: instagram,
    text: "@stupidpotato",
    href: "",
  },
];

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
      <StyledIntroduction>
        안녕하세요 STRC 회장 이성혁입니다. STRC 화이팅 안녕하세요 STRC 회장
      </StyledIntroduction>
    </StyledPhotoContainer>
  );
};

const Link = ({ text, icon, href }) => {
  return (
    <>
      <StyledLink>
        <StyledTextStyle href={href}>
          <StyledIconStyle icon={icon} />
          {text}
        </StyledTextStyle>
      </StyledLink>
    </>
  );
};
const Profile = (props) => {
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
      top: initContactTypoWeb.top,
      left: initContactTypoWeb.left,
      width: initContactTypoWeb.width,
      height: initContactTypoWeb.height,
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
