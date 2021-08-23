//이미지 소스, 크기를 데이터에 담아주기
export const setImgToCanvas = (canvasData, imgSrcArr) => {
  console.log("image setting");
  for (let imgSrc of imgSrcArr) {
    // console.log(imgSrc);
    let image = new Image();
    image.src = imgSrc; //이미지를 태그 src에 넣어주기
    canvasData.imgs.push({
      image,
      width: 0,
      height: 0,
    });
    // push가 draw보다 늦어서 첫 화면에서 안그려진다 -> 실행컨텍스트 문제같음
    // 이미지를 불러오기 전에는 image의 widht와 height 값이 없다, 일단 0으로 설정
    //
  }
};

export const setCanvasLayout = (canvasData) => {
  // console.log(canvasData);
  // console.log(canvasData.imgs);;
  for (let i of canvasData.imgs) {
    i.width = i.image.naturalWidth;
    i.height = i.image.naturalHeight;
  }
  // 여기서  image width 값과 height 값을 넣어주기
  let { width, height } = canvasData.imgs[0];
  canvasData.canvas = document.querySelector("#background-canvas");
  canvasData.ctx = canvasData.canvas.getContext("2d");
  canvasData.canvas.width = width;
  canvasData.canvas.height = height;
};

export const setCanvasTrans = (canvasData) => {
  let { width, height } = canvasData.imgs[0];
  let [innerWidth, innerHeight] = [window.innerWidth, window.innerHeight];
  let deviceRatio = innerHeight / innerWidth;
  let imgRatio = height / width;
  let heightRatio = window.innerHeight / height;
  let widthRatio = window.innerWidth / width;

  let [colTransX, colTransY] = [
    // scale()의 경우 px 이동 또한 scale로 곱해버린다!!!!!!!!!!
    (-width + innerWidth) / 2 / heightRatio,
    (-height + innerHeight) / 2 / heightRatio,
  ];
  let [verTransX, verTransY] = [
    // scale()의 경우 px 이동 또한 scale로 곱해버린다!!!!!!!!!
    (-width + innerWidth) / 2 / widthRatio,
    (-height + innerHeight) / 2 / widthRatio,
    ,
  ];

  if (deviceRatio > imgRatio) {
    console.log("세로");
    canvasData.canvas.style.transform = `scale(${
      heightRatio * 1.01
    }) translate(${colTransX}px, ${colTransY}px)`;
  } else {
    console.log("가로");
    canvasData.canvas.style.transform = ` scale(${
      widthRatio * 1.01
    })  translate(${verTransX}px, ${verTransY} px) `;
  }
};

//배경화면은 한번만 그려주고, currentScene이 바뀔때마다 그려준다, ==>  블랜딩 처리하면 계속 그려줘야 할것같다
// 이미지 파일을 캔버스에 미리 그려두고,  애니메이션 시에는 불러와서 스케일 조정만 해주기.
export const drawBackgroundCanvas = (sceneInfo, canvasData, layoutData) => {
  console.log(canvasData, layoutData);
  switch (layoutData.currentScene) {
    case 0:
      let rv = calcCanvasValues(
        canvasData.imgs[0],
        sceneInfo,
        layoutData,
        sceneInfo[0].values.blendValue
      );
      let {
        sx,
        sy,
        sWidth,
        sHeight,
        dx,
        dy,
        dWidth,
        dHeight,
        partScrollRatio,
      } = rv;
      let { image: prevImage, height, width } = canvasData.imgs[0];
      let { image: nextImage } = canvasData.imgs[1];
      console.log(rv);
      canvasData.ctx.drawImage(
        prevImage,
        sx,
        sy,
        sWidth,
        sHeight,
        dx,
        dy,
        dWidth,
        dHeight
      );
      canvasData.ctx.drawImage(
        nextImage,
        sx,
        (1 - partScrollRatio) * height,
        width,
        partScrollRatio * height,
        dx,
        (1 - partScrollRatio) * height,
        dWidth,
        partScrollRatio * height
      );
      setCanvasTrans(canvasData);
      break;
    case 1:
      const secondCanvas = canvasData.imgs[1];
      canvasData.ctx.drawImage(
        secondCanvas.image,
        0,
        0,
        secondCanvas.width,
        secondCanvas.height
      );
      setCanvasTrans(canvasData);
      break;
    case 2:
      break;
    case 3:
      break;
    case 4:
      break;
    case 5:
      break;
    case 6:
      break;
  }
};
// 인터랙션에서 그려지는 것들은 따로 그려주기

// drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) (en-US)

export const calcCanvasValues = (imageData, sceneInfo, layoutData, values) => {
  // console.log(imageData, sceneInfo, layoutData, values);

  let { image, width, height } = imageData;
  let rv = {
    // image: image,
    sx: 0,
    sy: 0,
    sWidth: width,
    sHeight: height,
    dx: 0,
    dy: 0,
    dWidth: width,
    dHeight: height,
  };
  let yOfCurrent = layoutData.yoffset - layoutData.prevScrollHeight; //현재 씬의 y스크롤높이 = 전체 y스크롤높이 - 이전씬의 스크롤높이 :
  let scrollHeight = sceneInfo[layoutData.currentScene].scrollHeight; // 현재씬의 스크롤높이
  // let pageHeight = window.innerHeight;
  // let pageWidth = window.innerWidth; //디바이스 좌우 길이
  // let scrollRatio = yOfCurrent / scrollHeight; //현재 씬에서 스크롤 이동 비율
  let partScrollStart = values.start * scrollHeight; //시작스크롤위치
  let partScrollEnd = values.end * scrollHeight; // 끝나는스크롤위치
  let partYoffset = yOfCurrent - partScrollStart;
  let partScrollHeight = partScrollEnd - partScrollStart; //애니메이션이 부분 진행되는 스크롤 길이
  let partScrollRatio = partYoffset / partScrollHeight;

  // console.log(yOfCurrent, partScrollHeight, partScrollRatio);

  if (
    yOfCurrent >= partScrollStart && //시작점을 지나고
    yOfCurrent <= partScrollEnd //마지막점을 지나지 않아씅면
  ) {
    // 블랜드 처리 계산
    switch (values.direction) {
      case "column": {
        switch (values.type) {
          case "up": {
            let rv = {
              image: image,
              sx: 0,
              sy: 0, //잘리는 위치
              sWidth: width,
              sHeight: (1 - partScrollRatio) * height,
              dx: 0,
              dy: 0,
              dWidth: width,
              dHeight: (1 - partScrollRatio) * height,
              partScrollRatio: partScrollRatio,

              // sx: 0,
              // sy: (1 - partScrollRatio) * height, //잘리는 위치
              // sWidth: width,
              // sHeight: partScrollRatio * height,
              // dx: 0,
              // dy: (1 - partScrollRatio) * height,
              // dWidth: width,
              // dHeight: partScrollRatio * height,
            };
            return rv;
          } //전체 씬의 스크롤ratio를 반영해서 적용,
        }
      }
      case "row": {
        switch (values.type) {
          case "out": {
            return rv;
            //   = {
            //   sx,
            //   sy,
            //   sWidth,
            //   sHeight,
            //   dx,
            //   dy,
            //   dWidth,
            //   dHeight,
            // }
          } //전체 씬의 스크롤ratio를 반영해서 적용,
          case "in": {
            return rv;
            //   = {
            //   sx,
            //   sy,
            //   sWidth,
            //   sHeight,
            //   dx,
            //   dy,
            //   dWidth,
            //   dHeight,
            // }
          }
        }
      }
    }
  } else if (yOfCurrent < partScrollStart) {
    //시작점 안지났으면
    return rv;
  } else if (yOfCurrent > partScrollEnd) {
    //end 지났으면
    return rv;
  }
};
