import React, { useState } from "react";
import NavBar from "./navbar";
import Home from "./pages/home";
// import projects from './pages/projects'
// import resume from './pages/resume'
// import contact from './pages/contact'

function PageContainer() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    if (currentPage === 'home') {
        return <Home setCurrentPage={setCurrentPage}/>
    }
    // switch (currentPage) {
    //     case 'home':
    //         return <home />
    //         break;
    //     case 'projects':
    //         return <projects />
    //         break;
    //     case 'resume':
    //         return <resume />
    //         break;
    //     case 'contact':
    //         return <contact />
    //         break;
    //     default:
    //         break;
    // }
  }

  return (
    <div>
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default PageContainer;
