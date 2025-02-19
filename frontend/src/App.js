// Importing the necessary modules and components
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';

// Main App component
function App() {
  return (
    <div>
      {/* BrowserRouter wraps the entire app to enable routing */}
      <BrowserRouter>

        {/* Navbar is placed outside Routes so it appears on all pages */}
        <Navbar/>

        {/* Routes define the different routes for the application */}
        <Routes>
          {/* Route for the homepage displaying the Shop component */}
          <Route path='/' element={<Shop/>}/>

          {/* Route for Men's category page with a category prop passed to ShopCategory component */}
          <Route path='/mens' element={<ShopCategory category="mens"/>}/>

          {/* Route for Women's category page */}
          <Route path='/womens' element={<ShopCategory category="women"/>}/>

          {/* Route for Kids' category page */}
          <Route path='/kids' element={<ShopCategory category="kid"/>}/>

          {/* Nested routes for Product page:
              - /product shows a generic Product component
              - /product/:productId shows a specific product based on the ID */}
          <Route path="/product" element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>

          {/* Route for the Cart page */}
          <Route path='/cart' element={<Cart/>}/>

          {/* Route for the Login and Signup page */}
          <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;