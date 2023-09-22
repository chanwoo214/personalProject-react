import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductAll from './pages/1. productAll/ProductAll';
import Detail from './pages/2. detail/Detail';
import Login from './pages/3. login/Login';
import Navbar from './components/header/Navbar'; 

//1. 전체 상품페이지, 로그인, 상품상세페이지
//1.1 create navbar
//2. In productAll page, you can view all the products
//3. when login button is pressed, move to login page
//4. When detail page is pressed, if not logged in, login page pops up
//5. detail page can be viewed only when logged in
//6. when logout button is pressed, user logs out
//7. when logged out, detail page cannot be viewed and login page pops up
//8. when logged in, logout icon appears and when logged out, login icon shows
//9. can search for a product

function App() {
  

  return (
    <div>
      <Navbar/>
    <Router>
      <Routes>
      
          <Route exact path='/' element={<ProductAll />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/product/:id' element={<Detail />} />
      
      </Routes>
      </Router>
      </div>
  )
}

export default App
