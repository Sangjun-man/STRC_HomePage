// export const wholeSectionLayout = (sceneInfo) => {
//   const layoutData = {
//     width: window.innerWidth,
//     height: window.innerHeight,
//     wholeHeight: window.innerHeight * 7,
//   };
//   for (let i in sceneInfo) {
//     sceneInfo[i].scrollHeight = layoutData.height * sceneInfo[i].heightNum;
//   }
// };

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
      layoutData.currentScene = Number(i); // 씬넘버 저장
      layoutData.prevScrollHeight = nowSceneHeight - sceneInfo[i].scrollHeight; // 현재 씬높이만큼 빼서 prev스크롤높이에 저장
      break;
    }
  }
};

export const calcCssValues = (sceneInfo, layoutData, values) => {
  //
  let rv;

  const yOfCurrent = layoutData.yoffset - layoutData.prevScrollHeight; //현재 씬의 y스크롤높이 = 전체 y스크롤높이 - 이전씬의 스크롤높이 :
  const scrollHeight = sceneInfo[layoutData.currentScene].scrollHeight; // 현재씬의 스크롤높이
  const scrollRatio = yOfCurrent / scrollHeight; //현재 씬에서 스크롤 이동 비율
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

    rv = values[0] + scrollRatio * (values[1] - values[0]); //전체 씬의 스크롤ratio를 반영해서 적용,
  }
  // console.log(rv);
  return rv;
};

// export const setLayout = () => {
//   // 각 스크롤 섹션의 높이 세팅
//   for (let i = 0; i < sceneInfo.length; i++) {
//     if (sceneInfo[i].type === "sticky") {
//       sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
//     } else if (sceneInfo[i].type === "normal") {
//       sceneInfo[i].scrollHeight =
//         sceneInfo[i].objs.content.offsetHeight + window.innerHeight * 0.5;
//     }
//     sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
//   }

//   yOffset = window.pageYOffset;

//   let totalScrollHeight = 0;
//   for (let i = 0; i < sceneInfo.length; i++) {
//     totalScrollHeight += sceneInfo[i].scrollHeight;
//     if (totalScrollHeight >= yOffset) {
//       currentScene = i;
//       break;
//     }
//   }
//   document.body.setAttribute("id", `show-scene-${currentScene}`);

//   const heightRatio = window.innerHeight / 1080;
//   sceneInfo[0].objs.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`;
//   sceneInfo[2].objs.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`;
// };
