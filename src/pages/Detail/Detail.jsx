import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Data from '../../db/mainData'
import './Detail.css'

const Detail = () => {
    const {id} = useParams()
    const mainProduct = Data.find((item)=> item.id == id)
  return (
    <div className='mainDetail h-screen p-10 md:p-12'>
      <Header />
     <div className='flex my-20'>
    
        <img className='w-2/5 h-72 rounded-xl' src={mainProduct.url}></img>
        
      <div className='flex flex-col p-20 text-white'> 
      <strong className='text-2xl bg-clip-content p-6 bg-green-800 border-4 border-green-800 border-dashed'>{mainProduct.name}</strong>
        <p className='mx-2 py-5 text-justify'>{mainProduct.description}</p>
        </div>
        </div>
   </div>
  )
}

export default Detail