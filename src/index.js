import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { currentSceneCheck, setLayout } from "./style/scroll";
import { layoutData, sceneInfo, canvasData } from "./style/data";
import { playAnimation } from "./style/animation";
import imgSrcArr from "./asset";
import {
  drawBackgroundCanvas,
  setCanvasLayout,
  setImgToCanvas,
} from "./style/canvas";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")

const main = () => {
  //정의된 함수들 -> 임포트 해서 쓸수 있나? 있다
  //여기 메인 함수는 asddEventListener 모아두기
  //각 함수들은 파일 만들어서 임포트해서 사용하기

  window.addEventListener("load", () => {
    console.log(imgSrcArr);
    setLayout(sceneInfo, layoutData); //씬 별로 스크롤 크기 저장
    setCanvasLayout(canvasData);
    currentSceneCheck(sceneInfo, layoutData);
    playAnimation(sceneInfo, layoutData);
    drawBackgroundCanvas(canvasData, layoutData);
  });
  window.addEventListener("resize", () => {
    setLayout(sceneInfo, layoutData); //씬 별로 스크롤 크기 저장
    currentSceneCheck(sceneInfo, layoutData); //현재 반영 씬 체크})
    drawBackgroundCanvas(canvasData, layoutData);
  });
  window.addEventListener("scroll", () => {
    layoutData.yoffset = window.pageYOffset; //현재 y오프셋 저장
    currentSceneCheck(sceneInfo, layoutData); //현재 반영 씬 체크
    playAnimation(sceneInfo, layoutData);
    drawBackgroundCanvas(canvasData, layoutData);
  });
};

setImgToCanvas(canvasData, imgSrcArr);
setCanvasLayout(canvasData, imgSrcArr);
// setLayout(sceneInfo, layoutData);
// drawBackgroundCanvas(canvasData, layoutData);
main();
