import ReactDOM from "react-dom";
import React from "react";
import Profile from "../components/Profile";
import { sceneInfo } from "../style/data";
import dummy from "../asset/images/operation/sangjun.jpg";
import ContactTypo from "../components/ContactTypo";
import LeftLine from "../components/LeftLine";

const leftLine = React.createRef();
const profileRef = React.createRef();
const typo1Ref = React.createRef();
const typo2Ref = React.createRef();

ReactDOM.render(
  <LeftLine foot={"contact"} width={1} ref={leftLine} />,
  document.getElementById("contact-left-line")
);
ReactDOM.render(
  <Profile ref={profileRef} />,
  document.getElementById("contact-profile")
);

ReactDOM.render(
  <ContactTypo ref={typo1Ref} num={1} />,
  document.getElementById("contact-typo1")
);
ReactDOM.render(
  <ContactTypo ref={typo2Ref} num={2} />,
  document.getElementById("contact-typo2")
);

sceneInfo[5].objs.profile = profileRef.current;
sceneInfo[5].objs.typo1 = typo1Ref.current;
sceneInfo[5].objs.typo2 = typo2Ref.current;
sceneInfo[5].objs.leftLine = leftLine.current;
