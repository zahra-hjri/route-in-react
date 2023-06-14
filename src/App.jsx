
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import About from './pages/About/About '
import Products from './pages/Products/Products';
import Todo from './pages/Todo/Todo';
// import HamburgerMenu from './components/HamburgurMenu/HamburgurMenu';
import './App.css'
import './index.css'



function App() {
  
  return (
  <div className='font-mono'>
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/todos" element={<Todo />} />
       </Routes>  
      </BrowserRouter>
      {/* <HamburgerMenu /> */}
  </div>
  )
}

export default App
