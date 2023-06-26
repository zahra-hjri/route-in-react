import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Data from '../../db/mainData'
import './Products.css'



const Products = () => {
    return (
        <div className='productMain h-full p-4'>
            <Header />
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center my-20 gap-5 px-20 h-full'>
           
           {Data.map((product)=>{
             return(
               
       <div key={product.id} className="max-w-sm bg-white border border-gray-200  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
           
               <img className="rounded-t-lg" src={product.url} alt="" />
           
           <div className="p-5">
               <a href="#">
                   <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
               </a>
               <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.price}$</p>
               <Link to={`/route-in-react/detail/${product.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                   Read more
                   <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
               </Link>
           </div>
       </div>
       )
         })}
           </div>
           <Footer />
        </div>
        )

}


export default Products