import React, { useState } from "react";
import NavBar from "./pages/Navbar";
import Home from "./pages/Home";
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import MobileModal from "./pages/Mobilemodal";
import ParticlesRenderer from "./utils/ParticlesRenderer";

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
      <ParticlesRenderer />
      {renderPage()}
      <MobileModal setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default PageContainer;
