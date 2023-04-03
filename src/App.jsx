import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import HeaderScreen from './components/Shared/Header/HeaderScreen'
import NavbarScreen from './components/Shared/Navbar/NavbarScreen'
import { getAllCategories } from './store/slices/categories.slice'

function App() {


  


  return (
    <>
    <div className="App">



    <HeaderScreen />

    </div>


     
     </>
  )
}

export default App
