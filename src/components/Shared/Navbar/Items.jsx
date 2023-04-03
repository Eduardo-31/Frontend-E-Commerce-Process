import React, { useState } from 'react'
import ShownCategories from './ShownCategories'

const Items = ({categories, navbar, setCategoriesType, setIsShownCategoriesType, setTypeDesktop}) => {

  
  const isShownCard = () => {
    //console.log('CATEGORIES',categories)
    console.log(window.screen.width)
    if(window.screen.width > 900){
      setIsShownCategoriesType(true)
      setCategoriesType(categories)
      setTypeDesktop(true)
      
    }else{

        setIsShownCategoriesType(true)
        setCategoriesType(categories)
        navbar.current.classList.remove("navbar-open") 
    }
  }
  
  
 

  return (
    
    <li className='navbar__items'  onMouseEnter={isShownCard} >
        <div  className='navbar__items__name'>{categories.name}</div>
        <div className='navbar__items__simbolo'><i className="fa-solid fa-angle-right"></i></div>
    </li>
    
    
  )
}

export default Items