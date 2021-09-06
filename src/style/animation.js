import { calcCoordinates, calcCssValues, endCheck } from "./scroll";

export const playAnimation = (sceneInfo, layoutData) => {
  //씬넘버 온 - 케이스를 나눈다
  //현재 씬에서 스크롤 비율값을 기준으로 이벤트 발생시킬지말지 결정
  //obj 안의 쿼리셀렉터 로 돔 설정 밸류값으로 어디서 이벤트 작동시킬지 확인
  //실제 css값 변화는 calcCssValue 함수 사용
  const currentScene = layoutData.currentScene;
  // console.log(layoutData.currentScene);
  const scrollRatio =
    (layoutData.yoffset - layoutData.prevScrollHeight) /
    sceneInfo[currentScene].scrollHeight;
  const objs = sceneInfo[currentScene].objs;
  const values = sceneInfo[currentScene].values;
  const canvas = sceneInfo[2].objs.canvas;

  switch (layoutData.currentScene) {
    case 0:
      objs.firstLogo.style.opacity = calcCssValues(
        sceneInfo,
        layoutData,
        values.firstLogo[0]
      );
      // 이미지 옮기기 실패,, -> forwardRef로 성공
      objs.firstLogoImg.style.top = `${calcCssValues(
        sceneInfo,
        layoutData,
        values.firstLogo[1]
      )}px`;
      // objs.sceneNext.style.opacity = calcCssValues(
      //   sceneInfo,
      //   layoutData,
      //   scrollRatio <= values.sceneNext[0][2].end
      //     ? values.sceneNext[0]
      //     : values.sceneNext[1]
      // );
      break;
    case 1:
      objs.lineMap.style.opacity = calcCssValues(
        sceneInfo,
        layoutData,
        scrollRatio <= values.lineMapOpacity[0][2].end
          ? values.lineMapOpacity[0]
          : values.lineMapOpacity[1]
      );

      break;
    case 2:
      if (window.innerWidth < 768) {
        objs.gradient.style.top = `${
          80 - calcCssValues(sceneInfo, layoutData, values.gradient) * 50
        }%`;
      } else {
        objs.gradient.style.left = `${
          -50 + calcCssValues(sceneInfo, layoutData, values.gradient) * 50
        }%`;
        objs.leftLine.style.opacity = calcCssValues(
          sceneInfo,
          layoutData,
          values.leftLine
        );
      }
      objs.paragraph.style.opacity = calcCssValues(
        sceneInfo,
        layoutData,
        values.paragraph
      );

      let blur = `blur(${calcCssValues(
        sceneInfo,
        layoutData,
        values.canvasBlurry
      )}px)`;
      objs.leftLine.style.filter = blur;
      objs.gradient.style.filter = blur;
      objs.paragraph.style.filter = blur;

      canvas.style.filter = blur;
      break;
    case 3:
      canvas.style.filter = "";
      break;
    case 4:
      // let { centerX, centerY, radius } = values.photoData.basisCoordinates;
      for (let i = 0; i < 12; i++) {
        // endCheck(
        //   sceneInfo,
        //   layoutData,
        //   values[`photo${i}`],
        //   objs[`photo${i}`],
        //   "top",
        //   "px"
        // );
        // endCheck(
        //   sceneInfo,
        //   layoutData,
        //   values[`photo${i}`],
        //   objs[`photo${i}`],
        //   "left",
        //   "px"
        // );
        // console.log(values);
        objs[`photo${i}`].style.opacity = calcCssValues(
          sceneInfo,
          layoutData,
          values[`photo${i}`]
        );
        let { x: LastX, y: LastY } = calcCoordinates(
          sceneInfo,
          layoutData,
          values[`photo${i}`],
          values.photoData,
          i
        );
        objs[`photo${i}`].style.top = `${LastY}px`;
        objs[`photo${i}`].style.left = `${LastX}px`;
        objs[`photo${i}`].style.transform = `translate(-50%,-50%)`;
      }
      break;

    // for (let i = 0; i < 12; i++) {
    //   objs[`photo${i}`].style.opacity = calcCssValues(
    //     sceneInfo,
    //     layoutData,
    //     values[`photo${i}`]
    //   );
    //   let { x: LastX, y: LastY } = Math.pow(
    //     calcCoordinates(
    //       sceneInfo,
    //       layoutData,
    //       values[`photo${i}`],
    //       values.photoData,
    //       i
    //     )
    //   );
    //   objs[`photo${i}`].style.top = `${LastY}px`;
    //   objs[`photo${i}`].style.left = `${LastX}px`;
    //   objs[`photo${i}`].style.transform = `translate(-50%,-50%)`;
    // }}
    case 5:
      if (window.innerWidth < 768) {
        objs.typo1.style.top = `${(objs.typo1.style.top = calcCssValues(
          sceneInfo,
          layoutData,
          values.typo1Mobile
        ))}px`;
        objs.typo2.style.top = `${calcCssValues(
          sceneInfo,
          layoutData,
          values.typo2Mobile
        )}px`;
      } else {
        objs.typo1.style.top = `${(objs.typo1.style.top = calcCssValues(
          sceneInfo,
          layoutData,
          values.typo1Web
        ))}px`;
        objs.typo2.style.top = `${calcCssValues(
          sceneInfo,
          layoutData,
          values.typo2Web
        )}px`;
      }
      console.log("5");
      break;
    case 6:
      break;
    default:
      return console.log("default");
  }
};
