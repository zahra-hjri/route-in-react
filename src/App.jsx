
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
        <Route path="/route-in-react/" element={<Home />} />
        <Route path="/route-in-react/about" element={<About />} />
        <Route path="/route-in-react/products" element={<Products />} />
        <Route path="/route-in-react/todos" element={<Todo />} />
       </Routes>  
      </BrowserRouter>
     
  </div>
  )
}

export default App
