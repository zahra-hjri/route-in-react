import React from 'react'
import {SiCodechef} from "react-icons/si"
import { Link } from "react-router-dom";
import Header from '../../components/Header/Header';
// import Footer from '../../components/Footer/Footer';
import './Home.css'

const Home = () => {

  return (
   

    <div
  className="main bg-cover bg-no-repeat p-10 md:p-12 text-center">
    
    <Header />
  <div className='text-center mt-20 flex flex-col'>
    <div className='flex justify-center'>
    <p className='text-4xl text-white font-bold w-72 py-5'>Restaurant</p>
    <SiCodechef className='text-5xl text-white' />
    </div>
    
    <p className='text-2xl text-white font-bold w-72 pt-7 mx-auto'>Enjoy it ... :)</p>
    
    <button className='text-xl mt-10 px-5 text-center py-2 border w-48 border-white bg-transparent text-white font-bold rounded-lg mx-auto hover:bg-white hover:text-orange-600'><Link to='/products'>Reservation</Link></button>
  {/* <Footer className='pt-10' /> */}
  </div>
</div>

  )
}

export default Home;