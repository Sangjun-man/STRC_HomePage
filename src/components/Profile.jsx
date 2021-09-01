import React, { useEffect, useState } from "react";
import styled from "styled-components";
const getImage = (src) => {
  let image = new Image();
  image.src = src; //이미지를 태그 src에 넣어주기

  return {
    imageSrc: image.src,
    width: image.naturalWidth,
    height: image.naturalHeight,
  };
};

export const ProfileImage = ({ profileImg, outWidth }) => {
  const d =
    "M318.71,157.29c0-82-64.64-148.45-144.38-148.45-45.82,0-86.65,22-113.09,56.17-30,7.59-52.34,35.46-52.34,68.7a71.37,71.37,0,0,0,24,53.69c13.53,67.55,71.7,118.34,141.4,118.34A140.66,140.66,0,0,0,242.85,288a52.6,52.6,0,0,0,21.56,4.61c29.81,0,54-24.85,54-55.5a56.42,56.42,0,0,0-8.22-29.43A151.89,151.89,0,0,0,318.71,157.29Z";

  const svgBox = {
    width: 300,
    height: 300,
  };
  const {
    imageSrc: imageSrc,
    width: imageWidth,
    height: imageHeight,
  } = getImage(profileImg);

  return (
    <>
      <div style={{ width: 0, height: 0 }}>
        <svg viewbox="0 0 120 120">
          <defs>
            <clipPath id="svgPath">
              <path d={d} />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div
        style={{
          display: "inline-block",
          width: 0,
          height: 0,
        }}
      >
        {/* <img
          src={profileImg}
          style={{
            clipPath: "url(#svgPath)",
            position: "relative",
            top: 0,
            left: 0,
          }}
          width={imageWidth}
          height={imageHeight}
        /> */}
      </div>
    </>
  );
};

// const StyledTeamLeader = styled.div``;

// const StyledTeamMember = styled.div`
//   display: none;
// `;

const Profile = ({ profileImg, type, leader, member }) => {
  console.log(profileImg, type, leader, member);
  // const [profileImg, setprofileImg] = useState();
  const outWidth = 500;
  // useEffect(() => {
  //   console.log(image, type, leader);
  //   setprofileImg(getImage(image));
  // }, [profileImg]);

  // if (!profileImg) {
  //   return <div>loading</div>;
  // }
  return (
    <>
      <ProfileImage profileImg={profileImg} outWidth={outWidth}></ProfileImage>
    </>
  );
};

export default Profile;
