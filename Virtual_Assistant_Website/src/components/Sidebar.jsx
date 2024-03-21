import React , {useContext} from 'react';
import * as IoIcons from "react-icons/io";
import * as FaIcons from "react-icons/fa";
import './Navbar.css';
import { useStateContext } from '../context/context';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {

  const { setdisplay } = useStateContext();

  const location = useLocation();

  const handleonclick=()=>{
    setdisplay(false)
  }

  const iconDisplay = (IconComponent, path, text) => (
    <div className='flex items-center justify-center'>
      <IconComponent id='iconS' />
      <Link onClick={handleonclick} id='txt' to={path} className={location.pathname === path ? 'active-link' : ''}>
        {text}
      </Link>
    </div>
  );

  return (
    <div>
      <div id='main' className="main w-screen flex gap-20 flex-col items-center justify-center">
        <div id='btns' className='flex items-center justify-center gap-2'>
            {iconDisplay(IoIcons.IoMdHome, "/", "Home")}
            {iconDisplay(FaIcons.FaBlackberry, "/about", "About")}
            {iconDisplay(IoIcons.IoMdContact, "/contact", "Contact")}
        </div>
        <div id='sm' className="flex gap-12 mt-28 justify-center items-center ">
          <a onClick={handleonclick} href="https://www.instagram.com/sshui_bnaeh/" target='_blank' rel="noopener noreferrer"><IoIcons.IoLogoInstagram id='iconS ' className=' text-red-600 w-12 h-12' /></a>
          <a onClick={handleonclick} href="https://github.com/Rishi00786" target='_blank' rel="noopener noreferrer"><IoIcons.IoLogoGithub id='iconS ' className='text-black w-12 h-12' /></a>
          <a onClick={handleonclick} href="https://www.linkedin.com/in/rishi-dhingra-aa59b5287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' rel="noopener noreferrer"><IoIcons.IoLogoLinkedin id='iconS ' className=' text-blue-500 w-12 h-12' /></a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
