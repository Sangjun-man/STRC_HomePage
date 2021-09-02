import "./index.css";
import "./App";
import { currentSceneCheck, setLayout, logoControl } from "./style/scroll";
import { layoutData, sceneInfo, logoInfo, canvasData } from "./style/data";
import { playAnimation } from "./style/animation";
import BGimgSrcArr from "./asset/images/background";
import {
  drawBackgroundCanvas,
  setCanvasLayout,
  setImgToCanvas,
} from "./style/canvas";

const main = () => {
  //정의된 함수들 -> 임포트 해서 쓸수 있나? 있다
  //여기 메인 함수는 asddEventListener 모아두기
  //각 함수들은 파일 만들어서 임포트해서 사용하기

  window.addEventListener("load", () => {
    // console.log(BGimgSrcArr);

    setLayout(sceneInfo, layoutData); //씬 별로 스크롤 크기 저장
    setCanvasLayout(canvasData);
    currentSceneCheck(sceneInfo, layoutData);
    playAnimation(sceneInfo, layoutData);
    drawBackgroundCanvas(sceneInfo, canvasData, layoutData);
    setTimeout(
      window.scrollTo({
        top: sceneInfo[layoutData.currentScene].scrollHeight / 2,
        behavior: "smooth",
      }),
      2000
    );
  });
  window.addEventListener("resize", () => {
    setLayout(sceneInfo, layoutData); //씬 별로 스크롤 크기 저장
    currentSceneCheck(sceneInfo, layoutData); //현재 반영 씬 체크})
    drawBackgroundCanvas(sceneInfo, canvasData, layoutData);
  });
  window.addEventListener("scroll", () => {
    layoutData.yoffset = window.pageYOffset; //현재 y오프셋 저장
    currentSceneCheck(sceneInfo, layoutData); //현재 반영 씬 체크
    playAnimation(sceneInfo, layoutData);
    logoControl(logoInfo, layoutData);
    drawBackgroundCanvas(sceneInfo, canvasData, layoutData);
  });
};

// let acc = 0.1;
// let yoffset = 0;
// let delayedYOffset = 0;
// let rafId;
// const loop = (layoutData) => {
//   delayedYOffset += (window.pageYOffset - delayedYOffset) * acc;
//   yoffset = delayedYOffset;
//   console.log(yoffset);

//   rafId = requestAnimationFrame(loop(layoutData));
//   if (window.pageYOffset - yoffset < 1) {
//     cancelAnimationFrame(rafId);
//   }
// };
// loop(layoutData);
setImgToCanvas(canvasData, BGimgSrcArr);
setCanvasLayout(canvasData);
main();
