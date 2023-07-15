import React from "react";
import PageContainer from "./components/PageContainer";
import "cirrus-ui";
import ParticlesRenderer from "./components/utils/ParticlesRenderer"

function App() {
  return (
    <>
      <ParticlesRenderer />
      <PageContainer />
    </>
  );
}

export default App;
