import ReactDOM from "react-dom";
import React, { useRef } from "react";
import styled, { css } from "styled-components";
import STRCLogo from "../asset/svg/STRCLogo.svg";
import STRC_FirstPageLogo from "../asset/svg/STRC_FirstPageLogo.svg";

export const FirstPageSTRCLogo = () => {
  return <img src={STRC_FirstPageLogo} width="500px"></img>;
};

ReactDOM.render(
  <FirstPageSTRCLogo />,
  document.getElementById("first-page-logo")
);
