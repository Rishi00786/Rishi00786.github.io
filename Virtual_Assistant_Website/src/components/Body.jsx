import React from 'react'
import './Body.css'
import Person from '../assets/person.webp'

const Body = () => {
    return (
        <>
            <div id='main_body' className='w-screen flex flex-col items-center '>
                <div id='background' className='w-screen flex gap-6 flex-col items-center justify-start'>
                    <div id='assist' className='sm:text-5xl font-bold text-gray-300 mt-20 flex text-center md:text-xl m-2'>
                        Virtual Assistant at Your Service
                    </div>
                    <div id='tit' className='font-light text-white text-center sm:text-xl'>
                    Your Dedicated Support Partner
                    </div>
                    <div id='btnn' className=' w-48 h-12 flex items-center justify-center text-black cursor-pointer'>
                        <Link to="/contact">See Services</Link>
                    </div>
                </div>
                <div id='women_box' className=" flex flex-col items-center md:items-center lg:items-center  gap-8 ">
                    <div id='women_image' className="mt-8 ">
                        <img src={Person} alt="" srcSet="" id='women_img'/>
                    </div>
                    <div id='store' className='flex flex-col items-center justify-center gap-4'>
                    <div id='info1' className='md:text-2xl text-center sm:text-xl w-4/5'>
                        <div className="1">
                            Hi, I'm Maggie, a Skilled Administrative Support Professional
                        </div>
                    </div>
                    <div id='info2' className='text-center font-normal w-4/5'>
                        <div className="1">
                        Experienced administrative professional adept at multitasking, problem-solving, organization, communication, and delivering exceptional support in various office environments.
                        </div>
                    </div>
                    <div id='info3' className='w-36 h-10 flex items-center justify-center mb-4'>
                        <Link to="/about">Read More</Link>
                    </div>
                    </div>
                </div>
                <div id='small' className="small flex flex-col items-center justify-center gap-2 mt-4">
                    <div id='j' className="font-medium text-center">
                    What Can I Do For You?
                    </div>
                    <div id='k' className="2 font-normal text-center m-4 sm:text-lg w-5/6">
                    Catering to Your Needs: A Versatile Virtual Assistant Ready to Assist You Every Step of the Way</div>
                </div>
            </div>
        </>
    )
}

export default Body
