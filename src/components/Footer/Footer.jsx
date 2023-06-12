
// import {BiRestaurant} from "react-icons/bi"
import { Link } from "react-router-dom";

const Footer = () => {

    return(
        
        <div className="flex justify-between "> 
            {/* <BiRestaurant className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white cursor-pointer" /> */}
            {/* <span className="text-white font-mono font-bold">CeteRinG</span> */}
        <div className="mx-auto mt-5 text-white font-bold z-50">
                <Link className="mx-1" to='/'>Twitter</Link>
                <Link className="mx-3" to='/about'>Instagram</Link>
                <Link className="mx-3" to='/products'></Link>
        
        </div>
    
</div>
              
    )
}

export default Footer;