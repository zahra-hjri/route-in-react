

import { Link } from "react-router-dom";
import { useState } from "react"; // import state
import {HiHome} from "react-icons/hi"
import {SiAppwrite} from "react-icons/si"
import {MdProductionQuantityLimits} from "react-icons/md"
import {FaPizzaSlice} from "react-icons/fa"



const Header = () => {
   

    const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
          return (
            <div className="flex items-center justify-between border-b border-gray-400 py-4">
              <Link to="/route-in-react/">
                <img src="./yum.svg" alt="logo" />
              </Link>
                
            
              <nav>
                <section className="MOBILE-MENU flex lg:hidden">
                  <div
                    className="HAMBURGER-ICON space-y-2"
                    onClick={() => setIsNavOpen((prev) => !prev)} 
                  >
                    <span className="block h-0.5 w-8  bg-white"></span>
                    <span className="block h-0.5 w-8  bg-white"></span>
                    <span className="block h-0.5 w-8  bg-white"></span>
                  </div>
        
                  <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> 
                    <div
                      className="CROSS-ICON absolute top-0 right-0 px-8 pt-20"
                      onClick={() => setIsNavOpen(false)} 
                    >
                      <svg
                        className="h-10 w-10 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </div>
                    <ul className="MENU-LINK-MOBILE-OPEN font-bold text-white flex flex-col items-center justify-between min-h-[250px]">
                   
                    <li className=" hover:text-green-400 flex">
                  <HiHome className="text-xl mx-1" />
                  <Link to="/route-in-react/">Home</Link>
                  </li>
                  <li className=" hover:text-green-400 flex">
                    <SiAppwrite className="text-xl mx-1" />
                  <Link to="/route-in-react/about">About us</Link>
                  </li>
                  <li className=" hover:text-green-400 flex">
                    <MdProductionQuantityLimits className="text-xl mx-1" />
                  <Link to="/route-in-react/products">Products</Link>
                  </li>
                  <li className=" hover:text-green-400 flex">
                    <FaPizzaSlice className="text-xl mx-1" />
                  <Link to="/route-in-react/productsApi">ProductsApi</Link>
                  </li>
                  <li className=" hover:text-green-400 flex">
                  <Link to="/route-in-react/todos">Todo</Link>
                  </li>
                    </ul>
                  </div>
                </section>
        
                <ul className="DESKTOP-MENU font-bold font-mono text-white hidden space-x-8 lg:flex">
                  <li className=" hover:text-green-400 flex">
                  <HiHome className="text-xl mx-1" />
                  <Link to="/route-in-react/">Home</Link>
                  </li>
                  <li className=" hover:text-green-400 flex">
                    <SiAppwrite className="text-xl mx-1" />
                  <Link to="/route-in-react/about">About us</Link>
                  </li>
                  <li className=" hover:text-green-400 flex">
                    <MdProductionQuantityLimits className="text-xl mx-1" />
                  <Link to="/route-in-react/products">Products</Link>
                  </li>
                  <li className=" hover:text-green-400 flex">
                    <FaPizzaSlice className="text-xl mx-1" />
                  <Link to="/route-in-react/productsApi">ProductsApi</Link>
                  </li>
                  <li className=" hover:text-green-400 flex">
                  <Link to="/route-in-react/todos">Todo</Link>
                  </li>
                </ul>
              </nav>
              <style>{`
              .hideMenuNav {
                transition: display 0.5s ease;
                display: none;
                
              }
              .showMenuNav {
                display: block;
                position: fixed;
                width: 50%;
                height: 100vh;
                top: 0;
                right: 0;
                background: white;
                z-index: 10;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;
                background-color: #7c8c77;
                transition: all 0.5s ease;
                
              }
            `}</style>
            </div>
          );
        }

export default Header;