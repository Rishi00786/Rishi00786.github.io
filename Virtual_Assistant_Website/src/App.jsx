import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import './index.css'
import Sidebar from './components/Sidebar'
import { useStateContext } from './context/context'
import Body from './components/Body'
import Body_two from './components/Body_two'
import Footer from './components/Footer'

function App() {

  const { display } = useStateContext()

  return (
    <>
      <Navbar/>
      {display && <div>
      <Sidebar/>
      </div>}
      <Body/>
      <Body_two/>
      <Footer/>
    </>
  )
}

export default App
