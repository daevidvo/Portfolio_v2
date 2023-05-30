import React, { useState } from "react";
import NavBar from "./pages/navbar";
import Home from "./pages/home";
import Projects from './pages/projects'
import Contact from './pages/contact'
import Footer from "./pages/footer";

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
      <Footer />
    </div>
  );
}

export default PageContainer;
