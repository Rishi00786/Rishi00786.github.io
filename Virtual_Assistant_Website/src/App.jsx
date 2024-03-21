import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import './index.css'
import Sidebar from './components/Sidebar'
import { useStateContext } from './context/context'
import Body from './components/Body'
import Body_two from './components/Body_two'
import Footer from './components/Footer'
import About from './components/About'
import Login from './components/Login'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {

  const { display } = useStateContext()

  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
      <Navbar/>
      {display && <div id='sidebar' className={display ? 'sidebar-visible' : 'sidebar-hidden'}><Sidebar/></div>}
      {!display && <div><Body/></div>}
      {!display && <div><Body_two/></div>}
      {!display && <div><Footer/></div>}
      </>
    },
    {
      path: "/about",
      element: <><Navbar/>
      {display && <div id='sidebar' className={display ? 'sidebar-visible' : 'sidebar-hidden'}><Sidebar/></div>}
      {!display &&<About/>}
      </>
    },
    {
      path: "/contact",
      element: <><Navbar/>
      {display && <div id='sidebar' className={display ? 'sidebar-visible' : 'sidebar-hidden'}><Sidebar/></div>}
      {!display && <Login/>}
      </>
    },
  ]);


  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
