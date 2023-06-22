import React from 'react'
import {SiCodechef} from "react-icons/si"
import { Link } from "react-router-dom";
import Header from '../../components/Header/Header';
import './Home.css'

const Home = () => {

  return (
   

    <div
  className="mainHome bg-cover bg-no-repeat p-10 md:p-12 text-center">
    
    <Header />
  <div className='text-center mt-20 flex flex-col'>
    <div className='flex justify-center py-10'>
    <p className='text-4xl text-white font-bold w-72 pt-3'>Restaurant</p>
    <SiCodechef className='text-5xl text-white rounded-full' />
    </div>
    
    <p className='text-2xl text-white font-bold w-72 pt-2 mx-auto'>Enjoy it ... :)</p>
    
    <button className='text-xl mt-10 px-5 text-center py-2 border w-48 border-white bg-white font-extrabold rounded-lg mx-auto '><Link to='/products'>Reservation</Link></button>
  
  </div>
</div>

  )
}

export default Home;