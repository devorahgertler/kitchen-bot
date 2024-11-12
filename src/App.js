import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from './pages/Homepage'
import Recipes from './pages/Recipes'
import Tools from './pages/Tools'
import Demos from './pages/Demos'
import PageNotFound from './pages/PageNotFound'
import LoginContext from './contexts/LoginContext'
import { useState } from 'react'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/demos" element={<Demos />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
