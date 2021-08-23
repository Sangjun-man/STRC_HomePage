import { useEffect, useRef } from "react";
import "./App.css";
import { sceneInfo } from "./style/data";
import { selectQuery, setLayout, wholeSectionLayout } from "./style/scroll";

function App() {
  // useEffect(() => {
  //   console.log("asdf");
  //   wholeSectionLayout(sceneInfo);
  //   selectQuery(sceneInfo);
  //   setLayout(sceneInfo, refs);

  //   console.log(sceneInfo);
  //   console.log(refs);
  // }, []);

  return (
    <>
      <div>컴포넌트 테스트</div>
    </>
  );
}

export default App;
