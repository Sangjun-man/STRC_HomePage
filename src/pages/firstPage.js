import React from "react";
import ReactDOM from "react-dom";
import FirstPageLogo from "../components/FirstPageLogo";
import { sceneInfo } from "../style/data";
const ref = React.createRef();

ReactDOM.render(
  <FirstPageLogo ref={ref} />,
  document.getElementById("first-page-logo")
);
sceneInfo[0].objs.firstLogoImg = ref.current;
