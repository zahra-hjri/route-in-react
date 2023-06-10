
import {BiRestaurant} from "react-icons/bi"
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div className="flex justify-between"> 
            <BiRestaurant className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white cursor-pointer" />
        <div className="mx-auto">
            
            <ul className="flex text-white">
                <li className="mx-3 text-xs sm:text-sm md:text-base font-bold cursor-pointer"><Link to='/'>Home</Link></li>
                <li className="mx-3 text-xs sm:text-sm md:text-base font-bold cursor-pointer"><Link to='/about'>About us</Link></li>
                <li className="mx-3 text-xs sm:text-sm md:text-base font-bold cursor-pointer"><Link to='/products'>Products</Link></li>
            </ul>
        
        </div>
    
</div>
              
    )
}

export default Header;