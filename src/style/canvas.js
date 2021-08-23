// import imgSrcArr from "../asset/index.js";
// import { canvasData } from "./data.js";

// sceneInfo[0].objs.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`;
// sceneInfo[2].objs.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`;
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
  }
};

export const setCanvasLayout = (canvasData) => {
  // console.log(canvasData);
  console.log(canvasData.imgs); //;
  for (let i of canvasData.imgs) {
    i.width = i.image.naturalWidth;
    i.height = i.image.naturalHeight;
  }
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

    // console.log("세로");
    // console.log(
    //   "이미지변환 크기 : ",
    //   width * heightRatio,
    //   height * heightRatio,
    //   "\n",
    //   "원래크기 : ",
    //   width,
    //   height,
    //   "\n",
    //   "중심 : ",
    //   (1 / 2) * width,
    //   (1 / 2) * height,
    //   "\n",
    //   "이동 : ",
    //   colTransX,
    //   colTransY
    // );

    // console.log(canvasData.canvas.style.transform);

    //
  } else {
    console.log("가로");
    canvasData.canvas.style.transform = ` scale(${
      widthRatio * 1.01
    })  translate(${verTransX}px, ${verTransY} px) `;
    // console.log("가로");
    // console.log(
    //   "이미지변환 크기 : ",
    //   width * widthRatio,
    //   height * widthRatio,
    //   "\n",
    //   "원래크기 : ",
    //   width,
    //   height,
    //   "\n",
    //   "중심 : ",
    //   (1 / 2) * width,
    //   (1 / 2) * height,
    //   "\n",
    //   "이동 : ",
    //   verTransX,
    //   verTransY
    // );
    // console.log(canvasData.canvas.style.transform);
  }
};

//배경화면은 한번만 그려주고, currentScene이 바뀔때마다 그려준다, ==>  블랜딩 처리하면 계속 그려줘야 할것같다
// 이미지 파일을 캔버스에 미리 그려두고,  애니메이션 시에는 불러와서 스케일 조정만 해주기.
export const drawBackgroundCanvas = (canvasData, layoutData) => {
  switch (layoutData.currentScene) {
    case 0:
      const firstCanvas = canvasData.imgs[0];
      canvasData.ctx.drawImage(
        firstCanvas.image,
        0,
        0,
        firstCanvas.width,
        firstCanvas.height
      );
      setCanvasTrans(canvasData);

      // setCanvasTrans(canvasData);
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
