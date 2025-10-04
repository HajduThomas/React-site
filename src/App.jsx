import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home.jsx";
import KonyvKereso from "./KonyvKereso.jsx";
import FilmKeres from "./FilmKeres.jsx";
function App() {

  return (
    <Router>
      <nav style={{ marginBottom: 20 }}>
        <Link to="/" style={{ marginRight: 10 }}>Nyitólap</Link>
        <Link to="/books" style={{ marginRight: 10 }}>Könyv kereső</Link>
        <Link to="/movies">Film kereső</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<KonyvKereso />} />
        <Route path="/movies" element={<FilmKeres />} />
      </Routes>
    </Router>
  )
}

export default App
