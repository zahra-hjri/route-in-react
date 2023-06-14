import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './About.css'



const About  = () => {
  return (
    <div className='bg-gray-900 h-full p-10 md:p-12'>
      <Header />

     <div className='flex py-20'>
      <img className="p-8 flex-1 h-96 rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300" src="../images/gallery-img-3.jpeg" alt="product image" />
     <div className='text-white flex-1 text-justify p-10'>Lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia modi voluptas laudantium sit reiciendis! Reprehenderit ad magnam quas aliquam quod porro sunt Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis alias aliquid hic nobis ullam quisquam, voluptas sint aperiam facere quaerat aliquam neque eius quis temporibus ut tempore provident accusantium quam? natus inventore quibusdam pariatur, provident libero enim alias?ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus perferendis optio, sequi cumque rem velit neque dolorum repellendus nulla quasi harum debitis officiis ut assumenda tempore exercitationem nesciunt in officia!</div>
     </div>
     <Footer />
    </div>
  )
}

export default About 