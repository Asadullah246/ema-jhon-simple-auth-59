
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/AllnavComponents/About';
import Product from './Components/AllnavComponents/Product';
import Header from './Components/Header/Header';
import RequireAuth from './RequireAuth';
import Home from "./Components/Home/Home.js"
import Login from "./Components/AllnavComponents/Login"
import SignUp from "./Components/AllnavComponents/SignUp"
import Others from "./Components/AllnavComponents/Others"

function App() {
  return (
    <div>

      <Header></Header>
     
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/others' element={<Others></Others>}></Route>

        <Route path='/product' element={<RequireAuth>
          <Product></Product>
        </RequireAuth>}>
        
        </Route>
        <Route path='/about' element={<RequireAuth>
          <About></About>
        </RequireAuth>}>
        
        </Route>
        
     
      </Routes>
    </div>
  );
}

export default App;
