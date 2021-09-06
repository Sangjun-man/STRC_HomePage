import React from "react";
import ReactDOM from "react-dom";
import TopLogo from "../components/TopLogo";
import { logoInfo } from "../style/data";

const container = React.createRef();
const whiteLogoRef = React.createRef();
const colorLogoRef = React.createRef();
// const scrollArrow = React.createRef();

const refs = [container, whiteLogoRef, colorLogoRef];

ReactDOM.render(<TopLogo ref={refs} />, document.getElementById("top-logo"));
// ReactDOM.render(<ScrollArrow ref={scrolArrow} />, document.getElementById("scroll-Arrow"));

logoInfo.topLogo.objs.container = container.current;
logoInfo.topLogo.objs.whiteLogo = whiteLogoRef.current;
logoInfo.topLogo.objs.colorLogo = colorLogoRef.current;
