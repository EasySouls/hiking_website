import { useState, createContext } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import About from "./About";
import Programs from "./Programs";

const PageContext = createContext();

function App() {
  const [currentPage, setCurrentPage] = useState("főoldal");

  return (
    <PageContext.Provider value={(currentPage, setCurrentPage)}>
      <HashRouter>
        <Routes>
          <Route exact path='/' element={<MainPage />} />
          <Route path='/magunkrol' element={<About />} />
          <Route path='/kapcsolat' element={<Programs />} />
        </Routes>
      </HashRouter>
    </PageContext.Provider>
  );
}

export default App;
