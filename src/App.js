import React from "react";
import PageContainer from "./components/PageContainer";
import "cirrus-ui";
import "./style.css";
import StarrySky from "./components/utils/background";

function App() {
  return (
    <div>
      <PageContainer />
      <StarrySky />
    </div>
  );
}

export default App;
