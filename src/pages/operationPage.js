import ReactDOM from "react-dom";
import React from "react";
import Gallery from "../components/GalleryWeb";
import Profile from "../components/Profile";
import dummy from "../asset/images/operation/sangjun.jpg";

ReactDOM.render(
  <Profile profileImg={dummy} />,
  document.getElementById("test")
);
