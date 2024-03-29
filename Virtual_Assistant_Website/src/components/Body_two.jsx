import React, { useState, useEffect } from 'react';
import './Body_two.css';
import * as faIcons from "react-icons/fa";
import {Link } from 'react-router-dom'

const Body_two = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const display_card = (icon, title, description, index) => {
        const isBorderVisible = windowWidth > 1014 && [0, 1, 3,4].includes(index);
        const borderClass = isBorderVisible ? 'border-r-2 border-black' : '';
        const isBorderVisible2 = windowWidth > 670 && windowWidth < 1015 && [0, 2,4].includes(index);
        const borderClass2 = isBorderVisible2 ? 'border-r-2 border-black' : '';
        return (
            <div id='card' className={`card ${borderClass} ${borderClass2}`}>
                <div>{icon}</div>
                <div id='titl' className="titl text-2xl">{title}</div>
                <div id='desc' className="w-4/5 font-normal overflow-scroll">{description}</div>
            </div>
        );
    };

    return (
        <>
            <div id='upper' className="upper bg-gray-100 w-screen flex flex-wrap gap-1 items-center justify-center">
                {display_card(<faIcons.FaRegCreditCard className='w-12 h-12'/> ,"Administrative Support", "Administrative support streamlines tasks, schedules, and communication, ensuring efficient operations. It manages paperwork, schedules meetings, and aids employees, boosting productivity.", 0)}
                <div id='outb' className="out w-96 h-1 bg-black"></div>
                {display_card(<faIcons.FaRocketchat className='w-12 h-12'/>, "Customer Support","Customer support is essential for resolving issues, providing guidance, and ensuring satisfaction. It involves listening, empathy, and prompt solutions to inquiries, fostering trust and loyalty.", 1)}
                <div id='outb' className="out w-96 h-1 bg-black"></div>
                {display_card(<faIcons.FaCalendarCheck className='w-12 h-12'/>, "Project Management", "Project management coordinates tasks, resources, and schedules to achieve objectives within constraints. It requires effective planning, communication, and adaptability for successful project completion.", 2)}
                <div id='outb' className="out w-96 h-1 bg-black"></div>
                {display_card(<faIcons.FaLaptop className='w-12 h-12'/>, "Social Media Management", "Social media management involves strategizing, creating, scheduling, and analyzing content across various platforms. It aims to build brand presence, engage audiences, and drive business goals effectively.", 3)}
                <div id='outb' className="out w-96 h-1 bg-black"></div>
                {display_card(<faIcons.FaSearchengin className='w-12 h-12'/>, "Data & Research", "Data and research are pivotal, fueling decisions with insights vital for organizational innovation and adaptation in a dynamic landscape.", 4)}
                <div id='outb' className="out w-96 h-1 bg-black"></div>
                {display_card(<faIcons.FaUserAstronaut className='w-12 h-12'/>, "Personal Assistant", "A Personal Assistant streamlines tasks, manages schedules, and provides support. They excel in organization, communication, and problem-solving. Offering efficiency, they handle diverse responsibilities, aiding productivity and easing burdens.", 5)}
            </div>
            <div className='flex items-start justify-center bg-gray-100 h-36'>
            <div id='read_btn' className="btn flex items-center justify-center cursor-pointer">
                <Link to="/about"><div className=''>Read More</div></Link>
            </div>
            </div>
        </>
    );
};

export default Body_two;
