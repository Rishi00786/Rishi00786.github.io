import React from 'react';
import MyIcon from '../assets/logo.webp';
import { FaBars, FaUserAstronaut } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import './Navbar.css';
import { useStateContext } from '../context/context';
import {Link }from 'react-router-dom'

const Navbar = () => {
    const { display, setdisplay } = useStateContext();

    const toggleSidebar = () => {
        setdisplay(!display)
    };

    return (
        <div className='w-full h-20 bg-gray-100 flex items-center md:justify-around lg:justify-around justify-between'>
            <div className="icon-name flex items-center gap-2">
                <Link to="/"><img id='my_icon' className='w-16' src={MyIcon} alt="" srcSet="" /></Link>
                <Link to="/"><div id='company_name' className='lg:text-2xl font-thin'>Maggie Brightstone</div></Link>
            </div>
            <div className="secnd flex">
                <div id="others" className="font-serif others flex xl:gap-16 lg:gap-12 md:gap-8 sm:gap-4 sm:mr-2">
                    <Link to='/about' className="text">About</Link>
                    <Link to='/contact' className="text">Contact</Link>
                    <div id='user' className='cursor-pointer'><FaUserAstronaut /></div>
                </div>
                <div id='bar' className="mr-4 hidden">
                    {!display && <FaBars onClick={toggleSidebar} id='icon' />}
                    {display && <AiOutlineClose onClick={toggleSidebar} id='icon' />}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
