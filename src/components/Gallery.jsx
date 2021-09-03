import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { sceneInfo } from "../style/data";
import galleryTypo from "../asset/svg/Gallery_Typo.svg";

const StyledGalleryTypo = styled.div`
  position: fixed;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  width: ${(props) => props.width}px;
  /* height: ${(props) => props.height}px; */
  transform: translate(-50%, -50%);

  @media screen and (max-width: 768px) {
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const StyledGalleryPhotoWeb = styled.div`
  position: fixed;
  font-size: 0px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;

  background-color: ${"#15172C"};
  background-image: url(${(props) => props.imgSrc});
  background-size: 108%;
`;

const galleryPhotoContainer = {
  width: "100%",
  height: "100%",
};
// 그냥 props만 전달인데 styled 컴포넌트 쓸 필요가 있나?

const GalleryTypo = (props) => {
  let { centerX, centerY } = props.basisCoordinates;
  let width = props.width;

  const initTypo = {
    //   left: 863.6807,
    //   top: 472.9536,
    // width: 379.3809,
    // height: 141.6558,
  };
  const Typo = {
    top: centerY,
    left: centerX,
    width: width,
    //   left: initTypo.left * (innerWidth / 1920),
    //   top: initTypo.top * (innerHeight / 1080),
    // width: initTypo.width * (innerWidth / 1920),
    // height:
    // initTypo.width * (innerWidth / 1920) * (initTypo.height / initTypo.width),
  }; //전체 브라우저 크기에서 width와 height 정해짐
  return (
    <>
      <StyledGalleryTypo
        top={Typo.top}
        left={Typo.left}
        width={Typo.width}
        // height={Typo.height}
      >
        <img src={galleryTypo} />
      </StyledGalleryTypo>
    </>
  );
};

const Gallery = (props, { imgSrcArr }) => {
  // props로 넘어오는게 바로 넘어오는듯 하다 비구조화할당 하면 한박자 늦게 오는듯
  const [innerWidth, setInnerWidth] = useState();
  const [innerHeight, setInnerHeight] = useState();
  const photos = [];
  let photoData = {};

  let start = Number(props.start);
  //사진이 띄워지는 갤러리 사이즈 크기
  const gallerySize = {
    startX: ((163 + 26 * 2) * innerWidth) / 1920 + 30,
    width: innerWidth - ((163 + 26 * 2) * innerWidth) / 1920 + 30,
    height: innerHeight,
    interMargin: 100,
  };
  const gallerySizeMobile = {
    startX: ((163 + 26 * 2) * innerWidth) / 1920 + 30,
    width: innerWidth,
    height: innerHeight,
    interLength: 100,
  };

  //사진 각각의 크기
  const photosLayoutData = {
    width: ((gallerySize.width - gallerySize.interMargin * 2) * 0.8) / 3,
    height: ((gallerySize.width - gallerySize.interMargin * 2) * 0.8 * 2) / 9,
  };
  const photosLayoutDataMobile = {
    width: gallerySize.width - 40,
    height: ((gallerySize.width - 40) * 2) / 3,
  };

  //센터좌표, 반지름 길이
  const basisCoordinates = {
    centerX: gallerySize.width / 2 + gallerySize.startX,
    centerY: innerHeight / 2,
    radius: gallerySize.width * 0.45 - photosLayoutData.width / 2,
  };
  const basisCoordinatesMobile = {
    centerX: gallerySize.width / 2,
    centerY: innerHeight,
    radius: photosLayoutData.height / 2,
  };
  //사진 담기는 배열

  for (let i = start; i < start + 6; i++) {
    // 여기에 Objs와 values 넣어주기,
    sceneInfo[4].objs[`photo${i}`] = document.getElementById(`photo-${i}`);
    sceneInfo[4].values[`photo${i}`] = [
      0,
      1,
      { start: (0.8 * i) / 12, end: (0.8 * (i + 1)) / 12 },
    ];
  }
  for (let i = 0; i < 6; i++) {
    photos.push({
      id: `photo-${i + start}`,
      imgSrc: props.imgSrcArr[i],
      // props로 넘어오는게 바로 넘어오는듯 하다 비구조화할당 하면 한박자 늦게 오는거 같다
    });
  }
  useEffect(() => {
    setInnerWidth(window.innerWidth);
    setInnerHeight(window.innerHeight);
    window.addEventListener("resize", () => {
      // console.log(window.innerWidth, window.innerHeight);
      setInnerWidth(window.innerWidth);
      setInnerHeight(window.innerHeight);
    });
  }, []);

  if (innerWidth < 768) {
    photoData = {
      type: "mobile",
      gallerySize: gallerySizeMobile,
      basisCoordinates: basisCoordinatesMobile,
      photosLayoutData: photosLayoutDataMobile,
    };
  } else {
    photoData = {
      type: "web",
      gallerySize: gallerySize,
      basisCoordinates: basisCoordinates,
      photosLayoutData: photosLayoutData,
    };
  }
  sceneInfo[4].values.photoData = photoData;

  //애니메이션에서 사용하는 값 : 갤러리 사이즈, 좌표값, 반지름

  return (
    <>
      <div style={galleryPhotoContainer}>
        <GalleryTypo
          basisCoordinates={photoData.basisCoordinates}
          width={photoData.photosLayoutData.width}
        ></GalleryTypo>
        {photos.map((photo) => (
          <StyledGalleryPhotoWeb
            id={photo.id}
            top={photoData.basisCoordinates.centerY}
            left={photoData.basisCoordinates.centerX}
            width={photoData.photosLayoutData.width}
            height={photoData.photosLayoutData.height}
            imgSrc={photo.imgSrc}
          ></StyledGalleryPhotoWeb>
        ))}
      </div>
    </>
  );
};

export default Gallery;
