export const layoutData = {
  yoffset: 0,
  prevScrollHeight: 0,
  currentScene: 0,
  totalScrollHeight: 0,
  sceneChange: { prev: 0, next: 0 },
};

export const canvasData = {
  canvas: "",
  ctx: "",
  imgs: [],
};

export const sceneInfo = [
  {
    type: "0",
    heightNum: 8,
    scrollHeight: 0,
    objs: {
      canvas: document.getElementById("#background-canvas"),
      scene: document.querySelector("#scene-0"),
      firstLogo: document.querySelector("#first-page-logo"),
      sceneFirst: document.querySelector("#scene-0-first"),
      sceneNext: document.querySelector("#scene-0-next"),
    },
    values: {
      firstLogo: [
        [0, 1, { start: 0, end: 0.25 }],
        [500, -300, { start: 0.7, end: 1 }],
      ],
      sceneFirst: [
        [0, 0, { start: 0, end: 0.25 }],
        [0, 0, { start: 0.25, end: 0.5 }],
      ], //초기값, 나중값, 시작비율
      sceneNext: [
        [0, 0, { start: 0.5, end: 0.75 }],
        [0, 0, { start: 0.75, end: 1 }],
      ],
      rectMove: { start: 0, end: 0.2 },
      blendValue: { direction: "column", type: "up", start: 0.75, end: 1 },

      //drawCanvas에서 같이 그려주면 됨,
    },
  },
  {
    type: "1",
    heightNum: 5,
    scrollHeight: 0,
    objs: {
      scene: document.querySelector("#scene-1"),
      lineMap: document.querySelector("#line-map"),
    },
    values: {
      blendValue: { direction: "row", type: "right", start: 0.7, end: 1 },
      lineMapOpacity: [
        [0, 1, { start: 0, end: 0.1 }],
        [1, 0, { start: 0.45, end: 0.5 }],
      ],
    },
  },
  {
    type: "2",
    heightNum: 5,
    scrollHeight: 0,
    objs: {
      scene: document.querySelector("#scene-2"),
      gradient: document.querySelector("#about-gradient"),
      leftLine: document.querySelector("#about-left-line"),
    },
    values: {
      blendValue: { direction: "row", type: "right", start: 0.7, end: 1 },
      gradient: [0, 1, { start: 0.1, end: 0.3 }],
      leftLine: [0, 1, { start: 0.3, end: 0.4 }],
    },
  },
  {
    type: "3",
    heightNum: 5,
    scrollHeight: 0,
    objs: {
      scene: document.querySelector("#scene-3"),
    },
    values: {
      linearBackground: ["#E8E8E8", "#15172C", { start: 0.7, end: 1 }],
    },
  },
  {
    type: "4",
    heightNum: 5,
    scrollHeight: 0,
    objs: {
      scene: document.querySelector("#scene-4"),
    },
    values: {
      // animation.js에서 여기 데이터를 사용한다.
      photoData: {},
      photo0: [0, 1, { start: 0.1, end: 0.3 }],
      photo1: [0, 1, { start: 0.2, end: 0.4 }],
      photo2: [0, 1, { start: 0.3, end: 0.5 }],
      photo3: [0, 1, { start: 0.4, end: 0.6 }],
      photo4: [0, 1, { start: 0.5, end: 0.7 }],
      photo5: [0, 1, { start: 0.6, end: 0.8 }],
    },
  },
  {
    type: "5",
    heightNum: 2,
    scrollHeight: 0,
    objs: {
      scene: document.querySelector("#scene-5"),
    },
    values: {},
  },
  {
    type: "6",
    heightNum: 2,
    scrollHeight: 0,
    objs: {
      scene: document.querySelector("#scene-6"),
    },
    values: {},
  },
];

// window.addEventListener('resize', () => wholeSectionLayout(sceneInfo), setLayout(sceneInfo));
