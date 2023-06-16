
import {AiFillTwitterSquare , AiFillInstagram , AiFillLinkedin} from "react-icons/ai"
import {FaPinterestSquare} from "react-icons/fa"
import { Link } from "react-router-dom";

const Footer = () => {

    return(
        
        <div className=" flex justify-center mt-16 mb-18"> 
            {/* <BiRestaurant className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white cursor-pointer" /> */}
            {/* <span className="text-white font-mono font-bold">CeteRinG</span> */}
        <div className=" mt-5 text-white flex flex-col">
              <div className="flex justify-center">
              <Link className="mx-3 text-3xl" to='/https://twitter.com/'>
                    <AiFillTwitterSquare />
                </Link>
                <Link className="mx-3 text-3xl" to='/https://www.instagram.com/'>
                    <AiFillInstagram />
                </Link>
                <Link className="mx-3 text-3xl" to='/https://www.pinterest.com/'>
                    <FaPinterestSquare />
                </Link>
                <Link className="mx-3 text-3xl" to='/https://www.linkedin.com/'>
                    <AiFillLinkedin />
                </Link>
              </div>
              <p className="text-white text-center py-5">© Copyright Agency and contributors 2023. ABN</p>
        
        </div>
    
</div>
              
    )
}

export default Footer;