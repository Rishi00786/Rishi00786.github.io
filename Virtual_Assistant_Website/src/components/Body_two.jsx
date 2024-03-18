import React, { useState, useEffect } from 'react';
import './Body_two.css';
import icon_1 from '../assets/logo.webp';

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
        const borderClass = isBorderVisible ? 'border-r-2 border-red-400' : '';
        const isBorderVisible2 = windowWidth > 670 && windowWidth < 1015 && [0, 2,4].includes(index);
        const borderClass2 = isBorderVisible2 ? 'border-r-2 border-red-400' : '';
        return (
            <div id='card' className={`card ${borderClass} ${borderClass2}`}>
                <div className='w-16'><img src={icon} alt="" /></div>
                <div id='titl' className="titl text-2xl">{title}</div>
                <div id='desc' className="w-4/5 font-thin">{description}</div>
            </div>
        );
    };

    return (
        <>
            <div id='upper' className="upper bg-green-500 w-screen flex flex-wrap gap-1 items-center justify-center">
                {display_card(icon_1, "Administrative Support", "I'm a paragraph. Click here to add your own text and edit me. I'm a great place for you to tell a story and let your users know a little more about you.", 0)}
                <div id='outb' className="out w-96 h-1 bg-gray-400"></div>
                {display_card(icon_1, "Administrative Support", "I'm a paragraph. Click here to add your own text and edit me. I'm a great place for you to tell a story and let your users know a little more about you.", 1)}
                <div id='outb' className="out w-96 h-1 bg-gray-400"></div>
                {display_card(icon_1, "Administrative Support", "I'm a paragraph. Click here to add your own text and edit me. I'm a great place for you to tell a story and let your users know a little more about you.", 2)}
                <div id='outb' className="out w-96 h-1 bg-gray-400"></div>
                {display_card(icon_1, "Administrative Support", "I'm a paragraph. Click here to add your own text and edit me. I'm a great place for you to tell a story and let your users know a little more about you.", 3)}
                <div id='outb' className="out w-96 h-1 bg-gray-400"></div>
                {display_card(icon_1, "Administrative Support", "I'm a paragraph. Click here to add your own text and edit me. I'm a great place for you to tell a story and let your users know a little more about you.", 4)}
                <div id='outb' className="out w-96 h-1 bg-gray-400"></div>
                {display_card(icon_1, "Administrative Support", "I'm a paragraph. Click here to add your own text and edit me. I'm a great place for you to tell a story and let your users know a little more about you.", 5)}
            </div>
            <div className='flex items-start justify-center bg-green-300 mb-12'>
            <div id='read_btn' className="btn flex items-center justify-center">
                <div className=''>Read More</div>
            </div>
            </div>
        </>
    );
};

export default Body_two;
