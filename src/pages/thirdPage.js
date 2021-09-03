import ReactDOM from "react-dom";
import React from "react";
import LeftLine from "../components/LeftLine";
import Gradient from "../components/Gradient";
import { sceneInfo } from "../style/data";
import Paragraph from "../components/Paragraph";

const gradient = React.createRef();
const leftLine = React.createRef();
const paragraph = React.createRef();

ReactDOM.render(
  <LeftLine foot={"about"} ref={leftLine} />,
  document.getElementById("about-left-line")
);
ReactDOM.render(
  <Gradient ref={gradient} />,
  document.getElementById("about-gradient")
);
ReactDOM.render(
  <Paragraph ref={paragraph} />,
  document.getElementById("about-paragraph")
);

sceneInfo[2].objs.gradient = gradient.current;
sceneInfo[2].objs.leftLine = leftLine.current;
sceneInfo[2].objs.paragraph = paragraph.current;
