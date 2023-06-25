
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './pages/Home/Home'
// import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
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
    {/* <Header /> */}
     <BrowserRouter>
       <Routes>
        <Route path="/route-in-react/" element={<Home />} />
        <Route path="/route-in-react/about" element={<About />} />
        <Route path="/route-in-react/products" element={<Products />} />
        <Route path="/route-in-react/productsApi" element={<ProductsApi />} />
        <Route path="/route-in-react/todos" element={<Todo />} />
       </Routes>  
      </BrowserRouter>
     </section>
     {/* <Footer /> */}
  </div>
  )
}

export default App
