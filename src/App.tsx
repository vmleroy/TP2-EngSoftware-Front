import React from 'react';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';

import Home from "./pages/Home/Home"
import Medico from './pages/Medico/Medico';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="medico" element={<Medico />} />
      </Routes>
    </Router>
  )
}

export default App;
