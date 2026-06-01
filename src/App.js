import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import Homepage from './pages/Homepage'
import Recipes from './pages/Recipes'
import Tools from './pages/Tools'
import Blogs from './pages/Blogs'
import PageNotFound from './pages/PageNotFound'
import LoginContext from './contexts/LoginContext'
import { useState, useEffect } from 'react'
import RecipeContext from './contexts/RecipeContext'
import ViewRecipe from './pages/ViewRecipe'
import ViewTools from './pages/ViewTools'
import Conversions from './pages/Conversions'
import Info from './pages/Info'
import Resources from './pages/Resources'
import DesignWorld from './pages/DesignWorld'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [title, setTitle] = useState('')
  const [id, setId] = useState('')
  const [image, setImage] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [directions, setDirections] = useState([])
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [contributor, setContributor] = useState('')
  const [notes, setNotes] = useState('')
  const [category, setCategory] = useState('')
  const [cuisine, setCuisine] = useState('')

  // const { hash } = useLocation();

  // useEffect(() => {
  //   if (hash) {
  //     const el = document.querySelector(hash);
  //     if (el) {
  //       setTimeout(() => {
  //         el.scrollIntoView({ behavior: "smooth" });
  //       }, 0);
  //     }
  //   }
  // }, [hash])

  return (
    <div className="App">
      <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <RecipeContext.Provider value={{ title, setTitle, id, setId, image, setImage, ingredients, setIngredients, directions, setDirections, hours, setHours, minutes, setMinutes, contributor, setContributor, notes, setNotes, category, setCategory, cuisine, setCuisine }}>
        <BrowserRouter>
                <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/viewrecipe" element={<ViewRecipe />} />
            <Route path="/viewtools" element={<ViewTools />} />
            <Route path="/conversions" element={<Conversions />} />
            <Route path="/info" element={<Info />} />
                        <Route path="/design" element={<DesignWorld />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        </RecipeContext.Provider>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
