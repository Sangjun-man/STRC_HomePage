import ReactDOM from "react-dom";
import React from "react";
import Gallery from "../components/Gallery";
import LeftLine from "../components/LeftLine";

ReactDOM.render(
  <LeftLine position="relative" />,
  document.getElementById("gallery-left-line")
);

ReactDOM.render(<Gallery />, document.getElementById("gallery-photo"));
