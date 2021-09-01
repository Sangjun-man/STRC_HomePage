import ReactDOM from "react-dom";
import React from "react";
import Gallery from "../components/Gallery";
import LeftLine from "../components/LeftLine";
import imgSrcArr from "../asset/images/gallery";

ReactDOM.render(
  <LeftLine position="relative" />,
  document.getElementById("gallery-left-line")
);

ReactDOM.render(
  <Gallery imgSrcArr={imgSrcArr} />,
  document.getElementById("gallery-photo")
);
