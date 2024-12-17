import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import Error from './pages/Error'
import About from './pages/about'

function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route index path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/about/:id' element={<About />}></Route>
      <Route path='*' element={<Error />}></Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App
