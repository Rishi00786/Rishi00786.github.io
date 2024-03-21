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

    labelRef1.current.style.transform = "";
    labelRef2.current.style.transform = "";
    labelRef3.current.style.transform = "";

    labelRef.current.style.transition = "transform 0.2s ease-in";
    labelRef.current.style.transform = "translateX(-1.8vw) translateY(-3vh) scale(0.75)";
  };

  return (
    <>
      <div className='flex w-screen items-start justify-center h-screen bg-indigo-700'>
        <div id='boxe' className="box bg-gray-700 flex flex-col items-center justify-center border-4">
          <div className='flex flex-col'>
            <label id='label' ref={labelRef1} className='text-white'>Username</label>
            <div><input onClick={() => handleOnClick(labelRef1)} type="text" name="" required="" className='bg-transparent text-white outline-none' /></div>
            <div className='bg-black w-full h-1 'id='line'></div>
          </div>
          <div className='flex flex-col'>
            <label id='label' ref={labelRef2} className='text-white'>Email</label>
            <div><input onClick={() => handleOnClick(labelRef2)} type="email" name="" required="" className='bg-transparent text-white outline-none' /></div>
            <div className='bg-black w-full h-1 'id='line'></div>
          </div>
          <div className='flex flex-col'>
            <label id='label' ref={labelRef3} className='text-white'>Phone</label>
            <div><input onClick={() => handleOnClick(labelRef3)} type="phone" name="" required="" className='bg-transparent text-white outline-none' /></div>
            <div className='bg-black w-full h-1 'id='line'></div>
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
