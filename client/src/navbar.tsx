import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import the hamburger icon and close icon from react-icons
import logo from "./img/logo_wbag.png";
import axios from "axios";
import "./main/assets/css/bd-coming-soon.css";

type Props = {};

const Navbar = (props: Props) => {
  const handleLogout = async () => {
    try {
      // Make an Axios request to your logout route
      const response = await axios.get("/api/user/logout");

      // Assuming your server responds with a success message
      if (response.data.success) {
        console.log("Logout successful");
        // You can also redirect the user or perform other actions after logout
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <div>
      {/* <header className="-mt-5" style={{ display: 'flex', justifyContent: 'space-between',alignItems:'center' }}>
                <div className="container" style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="">
                        <img src={logo} alt="logo" className="w-80" />
                    </div>
                </div>
                <div className='maintain2 container flex flex-wrap items-center mt-0 py-2'>
                    
                    <NavLink to='/userhome'>
                    <button className="-ml-24 text-lg ml-20 hover:underline bg-yellow-900 text-white font-semibold rounded-3xl my-6 py-3 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            Home
          </button>
                    </NavLink>
                    <NavLink to='/features'>
                        <button className="nav2 text-lg ml-16  hover:underline bg-yellow-900 text-white font-semibold rounded-3xl my-6 py-3 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            Features
          </button>
                        </NavLink>
                    <NavLink to='/advoconnect'>
                    <button className="nav2 text-lg hover:underline bg-yellow-900 text-white font-semibold rounded-3xl my-6 py-3 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    AdvoConnect
          </button>
                        </NavLink>
                    <NavLink to='/news'>
                    <button className="nav2 text-lg hover:underline bg-yellow-900 text-white font-semibold rounded-3xl my-6 py-3 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    News
          </button>
                        </NavLink>
                    <NavLink to='/landing'>
                    <button className="nav2 text-lg hover:underline bg-red-600 text-white font-semibold rounded-3xl my-6 py-3 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    Log Out
          </button>
                        </NavLink>
                </div>
            </header> */}
      {/* <body className="main2 leading-normal tracking-normal text-white gradient">
            
            <div className="pt-5">
      <div className="container px-3 mx-auto flex flex-wrap md:flex-row items-center flex-col">
       
        <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <h1 className="ml-16 text-5xl font-bold leading-tight mb-4">
          NyayMitra
          </h1>
          <p className="leading-normal text-3xl ml-12 text-black mb-8"><strong>Are you tired of navigating the complex world of legal jargon and documentation? Look no further!</strong></p>
          <button className="nav btn subscribe-btn mx-auto text-lg bg-yellow-900 text-white font-semibold rounded-3xl mb-6 py-4 px-8 shadow-lg transform transition duration-300 ease-in-out">
            Notify Me!
          </button>
        </div>
      </div>
    </div> */}
      {/* <div className="relative -mt-12 lg:-mt-24"> 
      <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero">
            <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
            <path
              d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
              opacity="0.100000001"
            ></path>
            <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path>
          </g>
          <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fill-rule="nonzero">
            <path
              d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"
            ></path>
          </g>
        </g>
      </svg>
    </div>
</body>*/}
      <nav
        className="navbar fixed-top"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 1) , rgba(0, 0, 0, 0) ",
        }}
      >
        <div className="container sm:px-4 lg:px-8 flex flex-wrap items-center justify-between lg:flex-nowrap">
          <a
            className="font-semibold text-3xl leading-4 no-underline page-scroll"
            href="/"
          >
            <img src={logo} alt="logo" className="w-72" />
          </a>

          <div className="lg:hidden">
            <FaBars
              className="text-white text-3xl  cursor-pointer"
              onClick={toggleNav}
            />
          </div>

          <div
            className={`fixed top-0 left-0 w-full bg-emerald-500 h-full bg- text-[1.5rem] flex flex-col items-center justify-center ${
              isNavOpen ? "flex" : "hidden"
            }`}
          >
            <FaTimes
              className="text-white text-5xl absolute top-4 right-4 cursor-pointer"
              onClick={toggleNav}
            />
            <ul className="pl-0 mb-2 flex flex-col space-y-20 items-center justify-center">
              <li>
                <a className="nav-link page-scroll active" href="#header">
                  <button className="nav2 text-lg ml-2  hover:underline bg-yellow-900 text-white font-semibold rounded-3xl my-6 py-2 px-6 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    <NavLink to="/userhome">Home</NavLink>
                    <span className="sr-only">(current)</span>
                  </button>
                </a>
              </li>
              <li>
                <a className="nav-link page-scroll " href="#features">
                  <button className="nav2 text-lg ml-2  hover:underline bg-yellow-900 text-white font-semibold rounded-3xl my-6 py-2 px-6 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    <NavLink to="/features">Features</NavLink>
                  </button>
                </a>
              </li>
              <li>
                <a className="nav-link page-scroll " href="#details">
                  <button className="nav2 text-lg ml-2  hover:underline bg-yellow-900 text-white font-semibold rounded-3xl my-6 py-2 px-6 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    <NavLink to="/advoconnect">AdvoConnect</NavLink>
                  </button>
                </a>
              </li>
              <li>
                <a className="nav-link page-scroll " href="#details">
                  <button className="nav2 text-lg ml-2  hover:underline bg-yellow-900 text-white font-semibold rounded-3xl my-6 py-2 px-6 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    <NavLink to="/news">News</NavLink>
                  </button>
                </a>
              </li>
              <li>
                <a className="nav-link page-scroll" href="#details">
                  <button className="nav2 text-lg ml-2  hover:underline bg-yellow-900 text-white font-semibold rounded-3xl my-6 py-2 px-6 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  <NavLink to="/landing">Log Out</NavLink>
                  </button>
                </a>
              </li>
            </ul>
          </div>

          <div
            className={`sm:hidden navbar-collapseoffcanvas-collapse lg:flex lg:flex-grow lg:items-center text-[1rem] ${
              isNavOpen ? "hidden" : "block"
            }`}
            id="navbarsExampleDefault"
          >
            <ul className="pl-0 mb-2 ml-auto flex flex-col list-none lg:mt-0 lg:mb-0 lg:flex-row">
              <li>
                <a className="nav-link page-scroll active" href="#header">
                  <button className="nav2 text-lg ml-2  hover:underline bg-yellow-900 text-white font-semibold rounded-3xl my-6 py-2 px-6 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    <NavLink to="/userhome">Home</NavLink>
                    <span className="sr-only">(current)</span>
                  </button>
                </a>
              </li>
              <li>
                <a className="nav-link page-scroll" href="#features">
                  <button className="nav2 text-lg ml-2  hover:underline bg-yellow-900 text-white font-semibold rounded-3xl my-6 py-2 px-6 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    <NavLink to="/features">Features</NavLink>
                  </button>
                </a>
              </li>
              <li>
                <a className="nav-link page-scroll" href="#details">
                  <button className="nav2 text-lg ml-2  hover:underline bg-yellow-900 text-white font-semibold rounded-3xl my-6 py-2 px-6 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    <NavLink to="/advoconnect">AdvoConnect</NavLink>
                  </button>
                </a>
              </li>
              <li>
                <a className="nav-link page-scroll" href="#details">
                  <button className="nav2 text-lg ml-2  hover:underline bg-yellow-900 text-white font-semibold rounded-3xl my-6 py-2 px-6 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    <NavLink to="/news">News</NavLink>
                  </button>
                </a>
              </li>
              <li>
                <a className="nav-link page-scroll" href="#details">
                  <button className="nav2 text-lg ml-2  hover:underline hover:bg-red-500 bg-red-700 text-white font-semibold rounded-3xl my-6 py-2 px-6 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    <NavLink to="/landing">Log Out</NavLink>
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
