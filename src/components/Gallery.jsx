import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { layoutData, sceneInfo } from "../style/data";

const StyledGalleryContainer = styled.div`
  width: 100%;
  height: 100%;
`;
//중심점 찾기
//

//  top: ${(props) => props.top}px;
//   left: ${(props) => props.left}px;
// width: ${(props) => 422}px;
// height: ${(props) => 281}px;
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
// 그냥 props만 전달인데 styled 컴포넌트 쓸 필요가 있나?
const Gallery = (props, { imgSrcArr }) => {
  // props로 넘어오는게 바로 넘어오는듯 하다 비구조화할당 하면 한박자 늦게 오느듣ㅅ
  const [innerWidth, setInnerWidth] = useState();
  const [innerHeight, setInnerHeight] = useState();
  const gallerySize = {
    startX: ((163 + 26 * 2) * innerWidth) / 1920 + 30,
    width: innerWidth - ((163 + 26 * 2) * innerWidth) / 1920 + 30,
    height: innerHeight,
    interMargin: 100,
  };
  //   startX: ((163 + 26 * 2) * innerWidth) / 1920 + 30, leftLine 끝나는 지점부터 컨테이너시작
  // 원을 그리고 컨테이너의 비율만큼 x y 스케일 조정
  const photosLayoutData = {
    // top: 0,
    // left: 0,
    width: ((gallerySize.width - gallerySize.interMargin * 2) * 0.8) / 3,
    height: ((gallerySize.width - gallerySize.interMargin * 2) * 0.8 * 2) / 9,
  };
  const basisCoordinates = {
    // centerX: (gallerySize.width- photosLayoutData.width)  / 2 + gallerySize.startX / 2,
    //   centerY: innerHeight / 2 - photosLayoutData.height / 2,
    centerX: gallerySize.width / 2 + gallerySize.startX,
    centerY: innerHeight / 2,
    radius: gallerySize.width * 0.45 - photosLayoutData.width / 2,
  };
  const photos = [];

  for (let i = 0; i < 6; i++) {
    // 여기에 Objs와 values 넣어주기,
    sceneInfo[4].objs[`photo${i}`] = document.getElementById(`photo-${i}`);
    let image = new Image();
    photos.push({
      id: `photo-${i}`,
      imgSrc: props.imgSrcArr[i],
      // props로 넘어오는게 바로 넘어오는듯 하다 비구조화할당 하면 한박자 늦게 오느듣ㅅ
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

  sceneInfo[4].values.photoData = {
    gallerySize: gallerySize,
    photosLayoutData: photosLayoutData,
    basisCoordinates: basisCoordinates,
  };

  return (
    <>
      <StyledGalleryContainer>
        {/* <갤러리 타이포 넣기> */}
        {/* maps-> 랜더링? */}
        {photos.map((photo) => (
          <StyledGalleryPhotoWeb
            id={photo.id}
            top={basisCoordinates.centerY}
            left={basisCoordinates.centerX}
            width={photosLayoutData.width}
            height={photosLayoutData.height}
            imgSrc={photo.imgSrc}
          ></StyledGalleryPhotoWeb>
        ))}
      </StyledGalleryContainer>
    </>
  );
};

export default Gallery;
