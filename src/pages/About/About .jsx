import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './About.css'



const About  = () => {
  return (
    <div className='aboutMain h-full p-8 md:p-12'>
      <Header />

     <div className='flex flex-col lg:flex-row py-10'>
      <img className="p-5 flex-1 h-96 rounded-4xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" src="gallery-img-5.jpeg" alt="product image" />
     <div className='text-white flex-1 text-justify p-5'>Lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia modi voluptas laudantium sit reiciendis! Reprehenderit ad magnam quas aliquam quod porro sunt Lorem ipsum, dolor sit amet consectetur adipisicingut temporeero  fficia!</div>
     </div>
     <Footer />
    </div>
  )
}

export default About 