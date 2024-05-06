import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import LoginSignUp from './Pages/LoginSignUp';
import Product from './Pages/Product';
import Footer from './Components/Footer/Footer';
import banner_mens from "./Components/Assets/banner_mens.png"
import banner_womens from "./Components/Assets/banner_women.png"
import banner_kids from "./Components/Assets/banner_kids.png"

function App() {
  return (
    <div className='app-style'>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory category="men" banner={banner_mens}/>}/>
        <Route path='/womens' element={<ShopCategory category="women" banner={banner_womens}/>}/>
        <Route path='/kids' element={<ShopCategory category="kid" banner={banner_kids}/>}/>
        <Route path='/login' element={<LoginSignUp/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
