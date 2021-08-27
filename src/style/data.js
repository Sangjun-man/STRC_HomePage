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
      sceneFirst: document.querySelector("#scene-0-first"),
      sceneNext: document.querySelector("#scene-0-next"),
    },
    values: {
      sceneFirst: [
        [0, 1, { start: 0, end: 0.25 }],
        [1, 0, { start: 0.25, end: 0.5 }],
      ], //초기값, 나중값, 시작비율
      sceneNext: [
        [0, 1, { start: 0.5, end: 0.75 }],
        [1, 0, { start: 0.75, end: 1 }],
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
      blendValue: { direction: "row", type: "right", start: 0.5, end: 1 },
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
    },
    values: {
      gradient: [0, 1, { start: 0.1, end: 0.3 }],
    },
  },
  {
    type: "3",
    heightNum: 2,
    scrollHeight: 0,
    objs: {
      scene: document.querySelector("#scene-3"),
    },
    values: {},
  },
  {
    type: "4",
    heightNum: 2,
    scrollHeight: 0,
    objs: {
      scene: document.querySelector("#scene-4"),
    },
    values: {},
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
