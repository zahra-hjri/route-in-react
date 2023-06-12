import React from 'react'
// import Header from '../../components/Header/Header'
import './Home.css'
import {BiRestaurant} from "react-icons/bi"
import { Link } from "react-router-dom";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';





const Home = () => {

  return (
   

    <div
  className="main relative overflow-hidden bg-cover bg-no-repeat p-10 md:p-12 text-center">
    
    <Header />
  <div
    className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
    <div className="flex h-full items-center justify-center">

      <div className="text-white">
     
        <h2 className="my-4 mt-0 text-xl sm:text-2xl md:text-4xl font-semibold cursor-pointer">Restaurant</h2>
        <h4 className="mb-10 text-xl sm:text-2xl md:text-xl font-semibold">Enjoy our food</h4>
        <button
          type="button"
          className="rounded border-2 border-neutral-50 px-4 md:px-7 pb-[5px] pt-[7px] md:pb-[8px] md:pt-[10px] text-sm font-medium text-white uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-white hover:text-black focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
          data-te-ripple-init
          data-te-ripple-color="light">
          Reservation
        </button>
  <Footer />
      </div>
    </div>
  </div>

</div>

  )
}

export default Home;