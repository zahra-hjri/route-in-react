
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import Detail from './pages/Detail/Detail';
// import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
// import Detail from './components/Detail/Detail';

import About from './pages/About/About '
import Products from './pages/Products/Products';
import Todo from './pages/Todo/Todo';
import ProductsApi from './pages/productsApi/productsApi';
import './App.css'
import './index.css'



function App() {
  
  return (
  <div className='font-mono'>
     <section>
     <BrowserRouter>
    {/* <Header /> */}
       <Routes>
        <Route path="/route-in-react/" element={<Home />} />
        <Route path="/route-in-react/about" element={<About />} />
        <Route path="/route-in-react/products" element={<Products />} />
        <Route path="/route-in-react/productsApi" element={<ProductsApi />} />
        <Route path="/route-in-react/todos" element={<Todo />} />
        <Route path="/route-in-react/detail/:id" element={<Detail />} />
       </Routes>  
     {/* <Footer /> */}
      </BrowserRouter>
     </section>
  </div>
  )
}

export default App
