import { layoutData } from "./style/data.js";
let acc = 0.1;
let delayoffset;
let rafId;
// let test = 10000;
// export const loop = () => {
//   test -= test * acc;
//   console.log(test);

//   rafId = requestAnimationFrame(loop);
//   if (test < 100) {
//     cancelAnimationFrame(rafId);
//   }
// };

export const loop = () => {
  layoutData.yoffset += (window.pageYOffset - layoutData.yoffset) * 0.1;
  //   console.log(layoutData.yoffset);

  rafId = requestAnimationFrame(loop);
  if (Math.abs(window.pageYOffset - layoutData.yoffset) < 1) {
    cancelAnimationFrame(rafId);
  }
};

/*
 |-----------------------------------|
 현재스크롤                         한번에 넘어온 스크롤


 */
