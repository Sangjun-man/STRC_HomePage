import "./pages/fixedElement";
import "./pages/firstPage";
import "./pages/secondPage";
import "./pages/thirdPage";
import "./pages/galleryPage";
import "./pages/contactPage";
import "./pages/lastPage";

import "./index.css";

import { currentSceneCheck, setLayout, logoControl } from "./style/scroll";
import { layoutData, sceneInfo, logoInfo, canvasData } from "./style/data";
import { playAnimation } from "./style/animation";
import BGimgSrcArr from "./asset/images/background";
import {
  drawBackgroundCanvas,
  setCanvasLayout,
  setImgToCanvas,
} from "./style/canvas";
import { loop } from "./scrollRaf.js";

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
    if (window.innerWidth < 500) {
      layoutData.yoffset = window.pageYOffset; //현재 y오프셋 저장
    } else {
      requestAnimationFrame(loop);
    }

    currentSceneCheck(sceneInfo, layoutData); //현재 반영 씬 체크
    playAnimation(sceneInfo, layoutData);
    logoControl(logoInfo, layoutData);
    drawBackgroundCanvas(sceneInfo, canvasData, layoutData);
  });
};

setImgToCanvas(canvasData, BGimgSrcArr);
setCanvasLayout(canvasData);
main();
