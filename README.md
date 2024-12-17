# BrowserRouter 설치
> npm install react-router-dom

# BrowserRouter 설정

  import { BrowserRouter, Routes, Route } from 'react-router-dom'
  
  <BrowserRouter>
    <Routes>
      <Route index path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/about/:id' element={<About />}></Route>
      <Route path='*' element={<Error />}></Route>
    </Routes>
  </BrowserRouter>
