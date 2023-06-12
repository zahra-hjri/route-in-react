import React from 'react'
import Header from '../../components/Header/Header'
import './Products.css'



const Products = () => {
  return (
    <div className='bg-gray-800 h-screen p-10 md:p-12'>
    <Header />
    <div className='flex my-20'>
      <div className='img1 text-white flex-1 h-72 rounded-lg mx-2'></div>
     <div className='img2 flex-1'></div>
     <div className='img3 text-white flex-1 h-72 rounded-lg mx-2'></div>
     <div className='img4 flex-1'></div>
     </div>
    </div>
  )
}

export default Products