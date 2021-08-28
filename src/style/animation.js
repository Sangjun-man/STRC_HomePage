import { calcCssValues } from "./scroll";

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

  switch (layoutData.currentScene) {
    case 0:
      objs.scene.style.display = "block";
      objs.sceneFirst.style.opacity = calcCssValues(
        sceneInfo,
        layoutData,
        scrollRatio <= values.sceneFirst[0][2].end
          ? values.sceneFirst[0]
          : values.sceneFirst[1]
      );
      objs.sceneNext.style.opacity = calcCssValues(
        sceneInfo,
        layoutData,
        scrollRatio <= values.sceneNext[0][2].end
          ? values.sceneNext[0]
          : values.sceneNext[1]
      );
      break;
    case 1:
      // console.log(objs.lineMap.style);
      objs.scene.style.display = "block";

      objs.lineMap.style.opacity = calcCssValues(
        sceneInfo,
        layoutData,
        scrollRatio <= values.lineMapOpacity[0][2].end
          ? values.lineMapOpacity[0]
          : values.lineMapOpacity[1]
      );

      break;
    case 2:
      objs.scene.style.display = "block";

      objs.gradient.style.left = `${
        -50 +
        calcCssValues(
          sceneInfo,
          layoutData,
          values.gradient
          // scrollRatio <= values.lineMapOpacity[0][2].end
          //   ? values.lineMapOpacity[0]
          //   : values.lineMapOpacity[1]}
        ) *
          50
      }%`;

      objs.leftLine.style.opacity = calcCssValues(
        sceneInfo,
        layoutData,
        values.leftLine
      );
      break;
    case 3:
      return console.log(3);

    case 4:
      return console.log(4);

    case 5:
      return console.log(5);

    case 6:
      return console.log(6);
    default:
      return console.log("default");
  }
};
