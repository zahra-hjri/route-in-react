
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home'
import About from './pages/About/About '
import Products from './pages/Products/Products';
import NoPage from './pages/NoPage/NoPage'

import './App.css'
import './index.css'



function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  </BrowserRouter>

  )
}

export default App
