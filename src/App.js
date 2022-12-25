import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './components/Cart';
import Notfound from './components/Notfound';
import BigNav from './components/BigNav';
import Footer from './components/Footer';
import About from './components/About';
import LogIn from './components/LogIn';
import Register from './components/Register';
import SelectedProduct from './components/SelectedProduct';

function App() {
  return (
    <div className="App">
       <ToastContainer/>
      <BigNav/>
      <Routes>
        <Route path='/Ecommerce-Site/' element={<Home/>}/>
        <Route path='product/:id/cart' element={<Cart/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='*' element={<Notfound/>}/>
        <Route path='about' element={<About/>}/> 
        <Route path='login' element={<LogIn/>}/> 
        <Route path='login/register' element={<Register/>}/>
        <Route path='product/:id' element={<SelectedProduct/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
