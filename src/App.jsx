import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
// import About from './pages/Home/HomeAbout';

function App() {

  return (
    <>      
    <Router basename={import.meta.env.VITE_BASE_URL || "/"}>      
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/about' element={<About/>}/> */}
      </Routes>
    </Router>
    </>
  )
}

export default App
