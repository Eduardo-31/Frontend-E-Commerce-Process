import React, { useState } from 'react'
import NavbarScreen from '../Navbar/NavbarScreen'
import Search from './Search'
import './styles/HeaderScreen.css'
import Cart from '../../svg/Cart'
import User from '../../svg/User'
const HeaderScreen = () => {

    const [openNavbar, setOpenNavbar] = useState(false)


  
    const activeNavbar = () => {
  
  
      
      setOpenNavbar(true)

    }


  return (
      <>
    <div className='container-header'>
        <div className='header-screen'>
            <div className='header-top'>
                <div className='header-title'>
                    <div onClick={activeNavbar} className='header-title__category'>
                        <div className="bar-top"></div>
                        <div className="bar-mid"></div>
                        <div className="bar-bottom"></div>
                    </div>
                    <h1 translate='no' className='header-title__title'>Coovpe</h1>
                </div>
                <div className='header-icons-d-flex'>
                    <User className={'icon-headers'} />
                <Cart className={'icon-headers'} />
                </div>
            </div>
                
            <div className='header-search'>
                <Search />
            </div>
        </div>
    </div>
        {
        
            openNavbar &&
    
            <NavbarScreen setOpenNavbar={setOpenNavbar}/>
    
        }
    </>
       )
    }

export default HeaderScreen