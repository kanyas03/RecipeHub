import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import React from 'react'
import Home from './pages/Home.jsx'
import Recipe from './pages/Recipe.jsx'
import SplashScreen from './pages/SplashScreen.jsx'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<SplashScreen/>}/>
      <Route path='/Home' element={<Home/>} />
      <Route path='/Recipe/:id' element={<Recipe/>} />
       
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
