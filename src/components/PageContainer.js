import React, { useState } from "react";
import NavBar from "./pages/navbar";
import Home from "./pages/home";
import Projects from './pages/projects'
import Contact from './pages/contact'
import MobileModal from "./pages/mobilemodal";

function PageContainer() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    if (currentPage === 'home') return <Home setCurrentPage={setCurrentPage}/>;
    if (currentPage === 'projects') return <Projects />;
    if (currentPage === 'contact') return <Contact/>;
  }

  return (
    <div>
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <MobileModal setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default PageContainer;
