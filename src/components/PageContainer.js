import React, { useState } from "react";
import NavBar from "./navbar";
import Home from "./pages/home";
import Projects from './pages/projects'
// import resume from './pages/resume'
// import contact from './pages/contact'

function PageContainer() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    if (currentPage === 'home') {
        return <Home setCurrentPage={setCurrentPage}/>
    }
    if (currentPage === 'projects') {
        return <Projects />
    }
    
  }

  return (
    <div>
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default PageContainer;
