import React from 'react'
import * as IoIcons from "react-icons/io";
import * as faIcons from "react-icons/fa";
import './Navbar.css'

const Sidebar = () => (
  <div>
    <div id='main' className="main w-56 flex gap-20 flex-col items-start justify-start">
      <div className='flex flex-col gap-12 mt-8'>
        <div id='btns' className="btns">
          <IoIcons.IoMdHome id='iconS' />
          <div id='txt' className="txt">Home</div>
        </div>
        <div id='btns' className="btns">
          <IoIcons.IoIosBookmark id='iconS' />
          <div id='txt' className="txt">Bookmark</div>
        </div>
      </div>
      <div className='flex flex-col gap-12'>
        <div id='btns' className="btns">
          <faIcons.FaBuysellads id='iconS'/>
          <div id='txt' className="txt">Artists</div>
        </div>
        <div id='btns' className="btns">
          <faIcons.FaMailBulk id='iconS'/>          
          <div id='txt' className="txt">Mail</div>
        </div>
      </div>
    <div id='sm' className="flex gap-2 mt-28 justify-center items-center ">
      <a href="" target='_blank'><faIcons.FaInstagram id='iconS'/></a>
      <a href="" target='_blank'><faIcons.FaWhatsapp id='iconS'/></a>
      <a href="" target='_blank'><faIcons.FaLinkedin id='iconS'/></a>
    </div>
    </div>
  </div>
)

export default Sidebar
