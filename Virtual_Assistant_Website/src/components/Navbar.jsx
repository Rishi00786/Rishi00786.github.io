import React , {useEffect , useState}from 'react'
import MyIcon from '../assets/logo.webp'
import { FaBars , FaUserAstronaut} from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import './Navbar.css'
import { useStateContext } from '../context/context';

const Navbar = () => {

    const { display , setdisplay } = useStateContext()

    const displaySidebar=()=>{
        setdisplay(!display)
    }
    const hideSidebar=()=>{
        setdisplay(!display)
    }
    return (
        <div className='w-full h-20 bg-gray-100 flex items-center md:justify-around lg:justify-around justify-between' >
            <div className="icon-name flex items-center gap-2 " >
                <a href="/icon"><img id='my_icon' className='w-16' src={MyIcon} alt="" srcSet="" /></a>
                <a href="/company"><div id='company_name' className='lg:text-2xl font-thin'>Maggie Brightstone</div></a>
            </div>
            <div className="secnd flex">
                <div id="others" className="font-serif others flex xl:gap-16 lg:gap-12 md:gap-8 sm:gap-4 sm:mr-2">
                    {/* <a href='/' className="text ">Home</a> */}
                    <a href='/about' className="text">About</a>
                    {/* <a href='/licence' className="text">Licence</a> */}
                    {/* <a href='/feedback' className="text">Feedback</a> */}
                    <a href='/contact' className="text">Contact</a>
                    <div id='user' className='cursor-pointer'><FaUserAstronaut/></div>
                </div>
                <div id='bar' className="hidden mr-4">
                    {!display && <FaBars onClick={displaySidebar} id='icon'/>}
                    {display && <AiOutlineClose onClick={hideSidebar} id='icon'/>}
                </div>
        </div>
        </div>
    )
}

export default Navbar

