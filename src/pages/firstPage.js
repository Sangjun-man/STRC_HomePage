import React from "react";
import ReactDOM from "react-dom";
import FirstPageLogo from "../components/FirstPageLogo";
import ScrollDownPlz from "../components/ScrollDownPlz";
import { sceneInfo } from "../style/data";
const firstPageLogoRef = React.createRef();
const scrollDownPlzRef = React.createRef();

ReactDOM.render(
  <FirstPageLogo ref={firstPageLogoRef} />,
  document.getElementById("first-page-logo")
);
ReactDOM.render(
  <ScrollDownPlz ref={scrollDownPlzRef} />,
  document.getElementById("scroll-down")
);
sceneInfo[0].objs.firstLogoImg = firstPageLogoRef.current;
sceneInfo[0].objs.scrollDownPlz = scrollDownPlzRef.current;
