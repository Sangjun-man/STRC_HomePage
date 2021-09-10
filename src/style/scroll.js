import { sceneInfo } from "./data";

export const setLayout = (sceneInfo, layoutData) => {
  if (sceneInfo) {
    for (let i in sceneInfo) {
      sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
      sceneInfo[i].objs.scene.style.height = `${sceneInfo[i].scrollHeight}px`;
      layoutData.totalScrollHeight += sceneInfo[i].scrollHeight;
    }
  }
};

export const currentSceneCheck = (sceneInfo, layoutData) => {
  // 현재 씬넘버와 이전씬까지의 스크롤 높이를 측정해보자
  let nowSceneHeight = 0; //현재 씬까지의 높이를 먼저 0으로 세팅
  let currentScene;
  for (let i in sceneInfo) {
    // 씬 갯수만큼 for문 돌릴건데
    nowSceneHeight += sceneInfo[i].scrollHeight; //현재 씬 높이에 각 씬의 scrollheight 를 더해줄것
    if (nowSceneHeight > layoutData.yoffset) {
      //근데 그 높이가 현재 스크롤 위치보다 크면 현재 씬에 위치해있는것이므로

      // if (Number(layoutData.currentScene) !== Number(i)) {
      //   //currentScene에 현재 씬을 반영하기 전에 미리 한번 체크,
      //   layoutData.sceneChange.prev = Number(layoutData.currentScene);
      //   layoutData.sceneChange.next = Number(i);
      //  배경을 바뀔때 한번만 그리려고 했는데 블랜딩 하게될테니 그동안은 스크롤단위로 꼐속 그려줘야 할듯.
      // }
      currentScene = i;
      layoutData.currentScene = Number(i); // 씬넘버 저장
      layoutData.prevScrollHeight = nowSceneHeight - sceneInfo[i].scrollHeight; // 현재 씬높이만큼 빼서 prev스크롤높이에 저장

      break;
    }
  }
  // console.log(layoutData);
  document.body.setAttribute("id", `show-scene-${currentScene}`);
};
///////////////////////////////////////
//반복되는 스크롤 비율 구하는 로직 리팩토링 시도//
///////////////////////////////////////
//스크롤 이동에 사용되는 모든 데이터 값 계산해주는 함수 뭐 없다 걍 모아노은거,
export const getScrollData = (sceneInfo, layoutData, values) => {
  // console.log(values);
  const yOfCurrent = layoutData.yoffset - layoutData.prevScrollHeight; //현재 씬의 y스크롤높이 = 전체 y스크롤높이 - 이전씬의 스크롤높이 :
  const scrollHeight = sceneInfo[layoutData.currentScene].scrollHeight; // 현재씬의 스크롤높이
  const sceneScrollRatio = yOfCurrent / scrollHeight; //현재 씬에서 스크롤 이동 비율
  const partScrollStart = values[2].start * scrollHeight; //시작스크롤위치
  const partScrollEnd = values[2].end * scrollHeight; // 끝나는스크롤위치
  const partScrollHeight = partScrollEnd - partScrollStart; //애니메이션이 부분 진행되는 스크롤 길이
  const partScrollRatio = (yOfCurrent - partScrollStart) / partScrollHeight;

  return {
    yOfCurrent,
    scrollHeight,
    sceneScrollRatio,
    partScrollStart,
    partScrollEnd,
    partScrollHeight,
    partScrollRatio,
  };
};

export const endCheck = (
  sceneInfo,
  layoutData,
  values,
  obj,
  styleType = "",
  unit = ""
) => {
  const scrollData = getScrollData(sceneInfo, layoutData, values);
  const { partScrollRatio, sceneScrollRatio } = scrollData;
  const endValue = values[2].end;
  console.log(sceneScrollRatio, partScrollRatio, endValue);
  if (sceneScrollRatio > partScrollRatio) {
    obj.style[styleType] = `${endValue}${unit}`;
    // console.log(obj.style[styleType]);
    // console.log(`${endValue}${unit}`);
  }
};

export const calcCssValues = (sceneInfo, layoutData, values) => {
  let rv;
  const scrollData = getScrollData(sceneInfo, layoutData, values); //스크롤 데이터 받아오기
  const { yOfCurrent: nowY, sceneScrollRatio: sceneRatio } = scrollData;
  const [startValue, endValue] = values;
  if (values.length === 3) {
    const {
      partScrollStart: start,
      partScrollEnd: end,
      partScrollHeight: height,
    } = scrollData;
    // 스타트와 앤드가 있는 애니메이션일때, start end 그때의 height 값 가져옴
    if (
      nowY >= start && //시작점을 지나고
      nowY <= end //마지막점을 지나지 않아씅면
    ) {
      rv =
        startValue + // 처음 시작 css값
        ((nowY - start) / height) * //애니메이션 내에서 이동한 비율에
          (endValue - startValue); //변화값 크기만큼 곱해줌
    } else if (nowY < start) {
      //시작점 안지났으면
      rv = startValue; //시작밸류
    } else if (nowY > end) {
      //end 지났으면
      rv = endValue; //끝밸류
    }
  } else {
    // start, end값이 없으면

    rv = startValue + sceneRatio * (endValue - startValue); //전체 씬의 스크롤ratio를 반영해서 적용,
  }

  // console.log("씬 비율 :" + sceneRatio);
  // console.log(rv);
  //rv는 0~1 사이의 값을 리턴

  rv = rv.toFixed(4);
  console.log(rv);
  return rv;
};

const PI2 = Math.PI * 2;
export const calcCoordinates = (
  sceneInfo,
  layoutData,
  values,
  photoData,
  index
) => {
  let { centerX, centerY, radius } = photoData.basisCoordinates;
  let { width: galleryWidth, height: galleryHeight } = photoData.gallerySize;
  let galleryLayoutRatio = galleryHeight / galleryWidth;
  let LastX, LastY;
  const coordinates = { x: centerX, y: centerY };
  const scrollData = getScrollData(sceneInfo, layoutData, values);
  const {
    yOfCurrent: curY,
    partScrollStart: start,
    partScrollEnd: end,
    partScrollRatio: ratio,
  } = scrollData;
  // console.log(curY, start, end);
  if (
    curY >= start && //시작점을 지나고
    curY <= end //마지막점을 지나지 않아씅면
  ) {
    // console.log("여기로 오나");
    switch (photoData.type) {
      case "web": {
        let currentDeg = (PI2 / 360) * (60 * index - 90);

        LastX = (centerX + radius * Math.cos(currentDeg)).toFixed(4);
        LastY = (
          centerY +
          radius * galleryLayoutRatio * Math.sin(currentDeg)
        ).toFixed(4);

        coordinates.x = (centerX * (1 - ratio) + LastX * ratio).toFixed(4);
        coordinates.y = (centerY * (1 - ratio) + LastY * ratio).toFixed(4);
        console.log(coordinates);
        return coordinates;
      }

      case "mobile": {
        centerX = window.innerWidth / 2; //모바일은 오차가 있어서 center 다시 정렬
        let currentRadius =
          galleryHeight * 0.55 - //제일 처음 사진이 놓일 height위치
          galleryHeight * 0.01 * (index < 6 ? index : index - 6);

        LastX = centerX.toFixed(4);
        LastY = (centerY - currentRadius).toFixed(4);

        coordinates.x = (centerX * (1 - ratio) + LastX * ratio).toFixed(4);
        coordinates.y = (centerY * (1 - ratio) + LastY * ratio).toFixed(4);
        // console.log("지나고있으면");
        console.log(coordinates);

        return coordinates;
      }
    }
  } else if (curY < start) {
    // //시작점 안지났으면
    coordinates.x = centerX.toFixed(4);
    coordinates.y = centerY.toFixed(4);
    // // console.log("아직 안지났으면");
    // console.log(coordinates);
    return coordinates;
    // break;
  } else if (curY > end) {
    //end 지났으면
    coordinates.x = LastX;
    coordinates.y = LastY;
    console.log(coordinates);
    return coordinates;
    // break;
  }
  console.log(coordinates);

  return coordinates;
};

// 변환된 x y 값을 리턴해주는 함수,

export const logoControl = (logoInfo, layoutData) => {
  const currentScene = layoutData.currentScene;
  const objs = logoInfo.topLogo.objs;
  // const value = logoInfo.topLogo.values.topLogo;
  // const topLogoWidth = window.innerWidth < 768 ? 65 : 150;
  // const topLogoLeft = window.innerWidth < 768 ? 20 : 1695;
  switch (currentScene) {
    case 0:
      // console.log(objs);
      objs.container.style.display = "none";
      break;
    case 1:
      // console.log(objs);
      objs.colorLogo.style.display = "none";
      objs.whiteLogo.style.display = "block";
      objs.container.style.display = "block";

      // objs.style.left = `${(window.innerWidth - topLogoWidth) / 2}px`;
      break;
    case 2:
      // objs.style.left = `${topLogoLeft}px`;
      break;

    case 3:
      objs.whiteLogo.style.display = "none";
      objs.colorLogo.style.display = "block";

      break;

    case 4:
      objs.whiteLogo.style.display = "block";
      objs.colorLogo.style.display = "none";
      break;

    case 5:
      break;

    case 6:
      break;
  }
};
