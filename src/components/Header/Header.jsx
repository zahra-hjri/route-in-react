

import { Link } from "react-router-dom";
import { useState } from "react"; // import state
import {HiHome} from "react-icons/hi"
import {SiAppwrite} from "react-icons/si"
import {MdProductionQuantityLimits} from "react-icons/md"



const Header = () => {
   

    const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
          return (
        //   <div className="flex justify-between">
        //       <Link to="/"><img src="../images/yum.svg" alt="logo" /></Link>
        //     <div
        //             className="HAMBURGER-ICON space-y-2 pr-60"
        //             onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
        //           >
        //             <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
        //             <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
        //             <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
        //           </div>
        //           <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
        //       <style>{`
        //      .hideMenuNav {
        //      display: none;
        //     }
        //     .showMenuNav {
        //     -webkit-text-size-adjust: 100%;
        //     -webkit-font-smoothing: antialiased;
        //     font-family: Proxima Nova, Helvetica, Arial, sans-serif;
        //     font-size: 1.6rem;
        //     font-weight: 400;
        //     line-height: 1.4;
        //     left: -1000px;
        //     overflow: scroll;
        //     position: absolute;
        //     top: -1000px;
        //     border: none;
        //     box-sizing: content-box;
        //     height: 200px;
        //     margin: 0px;
        //     padding: 0px;
        //     width: 200px;
        //      }
        //      `}</style>
        //      </div>
        //   </div>
            <div className="flex items-center justify-between border-b border-gray-400 py-8 z-50">
              <a href="/">
                <img src="../images/yum.svg" alt="logo" />
              </a>
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
                  <Link to="/">Home</Link>
                  </li>
                  <li className=" hover:text-green-400 flex">
                    <SiAppwrite className="text-xl mx-1" />
                  <Link to="/about">About us</Link>
                  </li>
                  <li className=" hover:text-green-400 flex">
                    <MdProductionQuantityLimits className="text-xl mx-1" />
                  <Link to="/products">Products</Link>
                  </li>
                  <li className=" hover:text-green-400 flex">
                  <Link to="/todos">Todo</Link>
                  </li>
                    </ul>
                  </div>
                </section>
        
                <ul className="DESKTOP-MENU font-bold font-mono text-white hidden space-x-8 lg:flex">
                  <li className=" hover:text-green-400 flex">
                  <HiHome className="text-xl mx-1" />
                  <Link to="/">Home</Link>
                  </li>
                  <li className=" hover:text-green-400 flex">
                    <SiAppwrite className="text-xl mx-1" />
                  <Link to="/about">About us</Link>
                  </li>
                  <li className=" hover:text-green-400 flex">
                    <MdProductionQuantityLimits className="text-xl mx-1" />
                  <Link to="/products">Products</Link>
                  </li>
                  <li className=" hover:text-green-400 flex">
                  <Link to="/todos">Todo</Link>
                  </li>
                </ul>
              </nav>
              <style>{`
              .hideMenuNav {
                display: none;
                
              }
              .showMenuNav {
                display: block;
                position: fixed;
                width: 40%;
                height: 100vh;
                top: 0;
                right: 0;
                background: white;
                z-index: 10;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;
                background-color: green;
                transition: width 2s, height 2s, transform 2s;
              }
            `}</style>
            </div>
          );
        }
        
        // <div className="flex justify-between "> 
        //     <BiRestaurant className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white cursor-pointer" />
        //     {/* <span className="text-white font-mono font-bold">CeteRinG</span> */}
        //     <HamburgerMenu />
        //     <div className="mx-auto mt-5 text-white font-bold z-50">
        //         <Link className="mx-3" to='/'>Home</Link>
        //         <Link className="mx-3" to='/about'>About us</Link>
        //         <Link className="mx-3" to='/products'>Products</Link>
        //         <Link className="mx-3" to='/todos'>Todo</Link>
        
        //     </div>
    
        // </div>
              
    


export default Header;