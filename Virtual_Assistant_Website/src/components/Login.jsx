import React, { useRef } from 'react';
import './Login.css';

const Login = () => {
  const labelRef1 = useRef();
  const labelRef2 = useRef();
  const labelRef3 = useRef();

  const handleOnClick = (labelRef) => {
    labelRef1.current.style.transition = "transform 0s ease-in";
    labelRef2.current.style.transition = "transform 0s ease-in";
    labelRef3.current.style.transition = "transform 0s ease-in";

    labelRef.current.style.transition = "transform 0.2s ease-in";
    labelRef.current.style.transform = "translateX(-1.8vw) translateY(-3vh) scale(0.75)";
  };

  return (
    <>
    
        <div className='flex flex-col items-center justify-center bg-black h-screen -z-50 containerr'>
          <div id='details' className='flex justify-center items-center font-bold italic'>
          <h1 className='text-green-400 text-center self-center'>Enter Details for Contact</h1>
          </div>
          <div id='boxe' className="box z-50 bg-gray-700 flex flex-col items-center justify-center border-4 rounded-3xl  sm:w-9/12 sm:h-96 sm:mt-12 sm:gap-16 md:w-3/5">
            <div className='flex flex-col'>
              <label id='label' ref={labelRef1} className='text-white'>Username</label>
              <div><input onClick={() => handleOnClick(labelRef1)} type="text" name="" required="" className='bg-transparent text-white outline-none' /></div>
              <div className='bg-black  h-1' id='line'></div>
            </div>
            <div className='flex flex-col'>
              <label id='label' ref={labelRef2} className='text-white'>Email</label>
              <div><input onClick={() => handleOnClick(labelRef2)} type="email" name="" required="" className='bg-transparent text-white outline-none' /></div>
              <div className='bg-black  h-1' id='line'></div>
            </div>
            <div className='flex flex-col'>
              <label id='label' ref={labelRef3} className='text-white'>Phone</label>
              <div><input onClick={() => handleOnClick(labelRef3)} type="phone" name="" required="" className='bg-transparent text-white outline-none' /></div>
              <div className='bg-black  h-1' id='line'></div>
            </div>
            <div>
              <button id='btn' className='w-36 h-12 bg-black text-white border-2'>Send</button>
            </div>
          </div>
        </div>
    </>
  );
}

export default Login;
