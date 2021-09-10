import React from "react";
import ReactDOM from "react-dom";
import ScrollDownPlz from "../components/ScrollDownPlz";
import TopLogo from "../components/TopLogo";
import { sceneInfo, logoInfo } from "../style/data";

const container = React.createRef();
const whiteLogoRef = React.createRef();
const colorLogoRef = React.createRef();
const scrollDownPlzRef = React.createRef();

const refs = [container, whiteLogoRef, colorLogoRef, scrollDownPlzRef];

ReactDOM.render(<TopLogo ref={refs} />, document.getElementById("top-logo"));
ReactDOM.render(
  <ScrollDownPlz ref={scrollDownPlzRef} />,
  document.getElementById("scroll-down")
);

logoInfo.topLogo.objs.container = container.current;
logoInfo.topLogo.objs.whiteLogo = whiteLogoRef.current;
logoInfo.topLogo.objs.colorLogo = colorLogoRef.current;

sceneInfo[0].objs.scrollDownPlz = scrollDownPlzRef.current;
