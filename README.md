# BrowserRouter 설치
> npm install react-router-dom

# BrowserRouter 설정
import { BrowserRouter, Routes, Route } from 'react-router-dom'

 ```htm
<BrowserRouter>
  <Routes>
    <Route index path='/' element={<Home />}></Route>
    <Route path='/about' element={<About />}></Route>
    <Route path='/about/:id' element={<About />}></Route>
    <Route path='*' element={<Error />}></Route>
  </Routes>
</BrowserRouter>
 ```

 # Link & useNavigate
 import { Link, useNavigate } from "react-router-dom";

```htm
 const navigate = useNavigate();
 <Link to={'/about'}>link to about</Link>
 <button onClick={() => navigate('/about/1')}>useNavigate</button>
```

# useParams
import { useParams, useLocation } from "react-router-dom";

```htm
const {id} = useParams();
const location = useLocation();
const queryParam = new URLSearchParams(location.search);
const keyword = queryParam.get('keyword');

<p>id = {id} by useParams</p>
<p>query value = {keyword}</p>
```