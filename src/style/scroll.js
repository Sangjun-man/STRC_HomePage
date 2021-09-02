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

export const calcCssValues = (sceneInfo, layoutData, values) => {
  //
  // console.log(sceneInfo, layoutData, values);
  let rv;

  const yOfCurrent = layoutData.yoffset - layoutData.prevScrollHeight; //현재 씬의 y스크롤높이 = 전체 y스크롤높이 - 이전씬의 스크롤높이 :
  const scrollHeight = sceneInfo[layoutData.currentScene].scrollHeight; // 현재씬의 스크롤높이
  const partScrollRatio = yOfCurrent / scrollHeight; //현재 씬에서 스크롤 이동 비율
  if (values.length === 3) {
    const partScrollStart = values[2].start * scrollHeight; //시작스크롤위치
    const partScrollEnd = values[2].end * scrollHeight; // 끝나는스크롤위치
    const partScrollHeight = partScrollEnd - partScrollStart; //애니메이션이 부분 진행되는 스크롤 길이
    // console.log(partScrollStart, partScrollEnd, partScrollHeight, yOfCurrent);
    if (
      yOfCurrent >= partScrollStart && //시작점을 지나고
      yOfCurrent <= partScrollEnd //마지막점을 지나지 않아씅면
    ) {
      rv =
        values[0] + // 처음 시작 css값
        ((yOfCurrent - partScrollStart) / partScrollHeight) * //애니메이션 내에서 이동한 비율에
          (values[1] - values[0]); //변화값 크기만큼 곱해줌
    } else if (yOfCurrent < partScrollStart) {
      //시작점 안지났으면
      rv = values[0]; //시작밸류
    } else if (yOfCurrent > partScrollEnd) {
      //end 지났으면
      rv = values[1]; //끝밸류
    }
  } else {
    // start, end값이 없으면

    rv = values[0] + partScrollRatio * (values[1] - values[0]); //전체 씬의 스크롤ratio를 반영해서 적용,
  }
  // console.log(rv);
  //rv는 0~1 사이의 값을 리턴
  return rv;
};

/////////////////////////////
//반복되는 스크롤 비율 구하는 로직 리팩토링이 필요하다//
////////////////////////////
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
  const yOfCurrent = layoutData.yoffset - layoutData.prevScrollHeight; //현재 씬의 y스크롤높이 = 전체 y스크롤높이 - 이전씬의 스크롤높이 :
  const scrollHeight = sceneInfo[layoutData.currentScene].scrollHeight; // 현재씬의 스크롤높이
  const SceneScrollRatio = yOfCurrent / scrollHeight; //현재 씬에서 스크롤 이동 비율
  const partScrollStart = values[2].start * scrollHeight; //시작스크롤위치
  const partScrollEnd = values[2].end * scrollHeight; // 끝나는스크롤위치
  const partScrollHeight = partScrollEnd - partScrollStart; //애니메이션이 부분 진행되는 스크롤 길이
  const partScrollRatio = (yOfCurrent - partScrollStart) / partScrollHeight;

  if (
    yOfCurrent >= partScrollStart && //시작점을 지나고
    yOfCurrent <= partScrollEnd //마지막점을 지나지 않아씅면
  ) {
    switch (photoData.type) {
      case "web": {
        let currentDeg = (PI2 / 360) * (60 * index - 90);

        LastX = centerX + radius * Math.cos(currentDeg);
        LastY = centerY + radius * galleryLayoutRatio * Math.sin(currentDeg);

        coordinates.x =
          centerX * (1 - partScrollRatio) + LastX * partScrollRatio;
        coordinates.y =
          centerY * (1 - partScrollRatio) + LastY * partScrollRatio;
        // console.log("web");

        return coordinates;
      }

      case "mobile": {
        let currentRadius = galleryHeight * 0.7 - galleryHeight * 0.05 * index;
        // console.log(centerY);
        LastX = centerX;
        LastY = centerY - currentRadius;

        coordinates.x =
          centerX * (1 - partScrollRatio) + LastX * partScrollRatio;
        coordinates.y =
          centerY * (1 - partScrollRatio) + LastY * partScrollRatio;
        // console.log("mobile");

        return coordinates;
      }
    }
  } else if (yOfCurrent < partScrollStart) {
    //시작점 안지났으면
    coordinates.x = centerX;
    coordinates.y = centerY;
    return coordinates;
  } else if (yOfCurrent > partScrollEnd) {
    //end 지났으면
    coordinates.x = LastX;
    coordinates.y = LastY;
    return coordinates;
  }

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
