import ReactDOM from "react-dom";
import React from "react";
import LeftLine from "../components/LeftLine";
import Gradient from "../components/Gradient";
import { sceneInfo } from "../style/data";

const gradient = React.createRef();

ReactDOM.render(<LeftLine />, document.getElementById("about-left-line"));
ReactDOM.render(
  <Gradient ref={gradient} />,
  document.getElementById("about-gradient")
);

sceneInfo[2].objs.gradient = gradient.current;
console.log(sceneInfo[2].objs.gradient);
