import React from 'react'
import './Footer.css'
import img from '../assets/vector_img.png'
import * as faIcons from "react-icons/fa";



const Footer = () => {
    const display_card = (title, description, author , name) =>{
        return(
            <div id='cards' className='flex items-center justify-center text-center flex-col bg-white sm:gap-8 md:w-72 md:h-11/12 lg:gap-6 xl:gap-6 md:gap-2'>
                <div id="comma" className=' text-5xl'>⤨⤨</div>
                <div id='title' className="font-medium sm:text-4xl md:text-xl lg:text-2xl lg:w-full xl:text-3xl">{title}</div>
                <div id='descript' className="font-thin sm:w-5/6 w-11/12 sm:text-lg md:text-sm xl:text-lg">{description}</div>
                <div id='auth' className=" font-medium sm:text-3xl md:text-xl xl:text-3xl">{author}</div>
                <div id='namee' className="font-thin sm:text-lg md:text-sm xl:text-lg">{name}</div>
            </div>
        )

    }


  return (

    <>
    <div id='full' className="w-screen flex flex-col items-center justify-center sm:gap-16 md:justify-start md:gap-16 ">
        <div id="trust" className='text-white flex items-center justify-center text-center '>
            <div id="t" className='sm:text-4xl sm:w-4/5 md:mt-24'>Trusted by Companies and Entrepreneurs Throughout the Country</div>
        </div>
        <div id="company" className='text-white flex sm:flex-col sm:gap-8 sm:text-2xl md:flex-row xl:gap-56'>
            <div className='flex flex-col items-center justify-center gap-2'>
            <faIcons.FaBasketballBall className=' h-8 w-8'/>
            <div id="name">San Sea</div>
            </div>
            <div id="name">BELTOK</div>
            <div id="name">Ted & Brooks</div>
            <div className='flex gap-3 items-center justify-center'>
            <faIcons.FaAsymmetrik/>
            <div id="name">Milestone</div>
            </div>
        </div>
        <div id="more_cards" className='flex flex-col items-center justify-center sm:gap-12 md:flex-row'>
            {display_card("Organized and Efficient","Organized and efficient individuals streamline processes, optimize resources, and achieve goals effectively, maximizing productivity.","Jen B.","Milestone")}
            {display_card("Flexible and Committed","Flexible and committed individuals adapt readily and demonstrate unwavering dedication to their goals and responsibilities.","Louis M.","Beltok")}
            {display_card("Creative & Resourceful","Creative & Resourceful individuals innovate, adapt, and find solutions, leveraging their ingenuity and versatility effectively.","Karen L.","Ted & Brook")}
        </div>   
        <div id="hope" className='flex flex-col items-center justify-center sm:gap-8'>
            <img id='vector_img' className='sm:w-72 md:w-80' src={img} alt=""/>
            <div id='hope_txt ' className='font-bold text-center sm:text-3xl sm:w-5/6 md:w-full'>Let's Take Your Business to the Next Level</div>
            <div id='read_btn' className="btn flex items-center justify-center cursor-pointer">
                <div className="t">Contact Me</div>
            </div>
        </div> 
        <div id="copy" className='flex bg-blue-800 w-screen items-center justify-center sm:h-24'>
            <div id='copyright' className='text-center text-white font-thin'>© 2035 by Maggie Brightstone. Powered and secured by Wix</div>
        </div>
    </div>    
    </>
  )
}

export default Footer
