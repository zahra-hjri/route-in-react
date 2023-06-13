
import {BiRestaurant} from "react-icons/bi"
import { Link } from "react-router-dom";

const Header = () => {

    return(
        
        <div className="flex justify-between "> 
            <BiRestaurant className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white cursor-pointer" />
            {/* <span className="text-white font-mono font-bold">CeteRinG</span> */}
        <div className="mx-auto mt-5 text-white font-bold z-50">
                <Link className="mx-3" to='/'>Home</Link>
                <Link className="mx-3" to='/about'>About us</Link>
                <Link className="mx-3" to='/products'>Products</Link>
        
        </div>
    
</div>
              
    )
}

export default Header;