import React from 'react'
import './Body.css'
import Person from '../assets/person.webp'

const Body = () => {
    return (
        <>
            <div id='main_body' className='w-screen bg-gray-200 flex flex-col items-center '>
                <div id='background' className='w-screen flex gap-6 flex-col items-center justify-start'>
                    <div id='assist' className='sm:text-3xl font-bold text-gray-200 mt-20 flex text-center'>
                        Virtual Assistant at Your Service
                    </div>
                    <div id='tit' className='font-light text-white text-center sm:text-xl'>
                        I'm a title. Click here to edit me.
                    </div>
                    <div className='bg-purple-400 w-48 h-12 flex items-center justify-center text-white '>
                        See Services
                    </div>
                </div>
                <div id='women_box' className="bg-yellow-400 flex flex-col items-center md:items-center lg:items-center  gap-8 ">
                    <div id='women_image' className="mt-8 ">
                        <img src={Person} alt="" srcSet=""/>
                    </div>
                    <div id='store' className='flex flex-col items-center justify-center gap-4'>
                    <div id='info1' className='md:text-2xl text-center sm:text-xl w-4/5'>
                        <div className="1">
                            Hi, I'm Maggie, a Skilled Administrative Support Professional
                        </div>
                    </div>
                    <div id='info2' className='text-center font-thin w-4/5'>
                        <div className="1 ">
                            I'm a paragraph. Click here to add your own text and edit me. It’s easy
                            Just click “Edit Text” or double click me to add your own content and
                            make changes to the font.
                        </div>
                    </div>
                    <div id='info3' className='w-36 h-10 bg-purple-400 flex items-center justify-center mb-4'>
                        <a href="/more">Read More</a>
                    </div>
                    </div>
                </div>
                <div id='small' className="small flex flex-col items-center justify-center gap-2 mt-4">
                    <div id='j' className="font-medium text-center">
                    What Can I Do For You?
                    </div>
                    <div id='k' className="2 font-thin text-center m-4 sm:text-lg w-5/6">
                    I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.
                    </div>
                </div>
            </div>
        </>
    )
}

export default Body
