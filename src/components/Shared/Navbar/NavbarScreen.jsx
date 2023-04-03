import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import Items from './Items'
import ShownCategories from './ShownCategories'
import './styles/NavbarScreen.css'
import data from './categories.json'

const NavbarScreen = ({setOpenNavbar}) => {

    const [category, setCategory] = useState()
    const [isShownCategoriesType, setIsShownCategoriesType] = useState(false)
    const [typeDesktop, setTypeDesktop] = useState(false)
    const [categoriesType, setCategoriesType] = useState()

    const navbar = useRef()
    const isActiveType = useRef()

    const closeNavbar = () => {

        //!typeDesktop && isActiveType.current.classList.add('categories-type-open')
        //navbar.current.classList.remove("navbar-open")
        //isShownCategoriesType && setIsShownCategoriesType(false)

        
        if(isShownCategoriesType){
            if(!typeDesktop){
                isActiveType.current.classList.add('categories-type-close')
                setTimeout(() => {
                    setIsShownCategoriesType(false)
                }, 220);
            }
            if(typeDesktop){
                setIsShownCategoriesType(false)
            }
        }
        navbar.current.classList.remove("navbar-open")

        setTimeout(() => {
            
            setOpenNavbar(false)
        }, 220);
        

    }

  

    /*useEffect(() => {
        
        axios.get('http://localhost:8000/api/v1/categories')
            .then(res => {
                navbar.current.classList.add("navbar-open"),
                setCategory(res.data.categories)
            })
            .catch(err => console.log(err))
            
                
            
    }, [])*/
    
   
    useEffect(() => {
        setCategory(data.categories)
        setTimeout(() => {
            navbar.current.classList.add("navbar-open")
            
        }, 160);
    }, [])
    
    
   
    
   
    

    const elementStopPropagation = (e) => {
        e.stopPropagation()
    }


    const prevNavbar = () => {
        //navbar.current.classList.remove("navbar-open")
        navbar.current.classList.add("navbar-open")
        //isActiveType.current.classList.remove('categories-type-open')
        setTimeout(() => {
            setIsShownCategoriesType(false)
        }, 150);
    }

  return (
    <>
    <div onClick={closeNavbar} className='section-navbar'>
            
            <div className='container-navbar'>

                
                <div onClick={elementStopPropagation} ref={navbar} className='navbar'>
                    <div className='navbar__header'>
                        <div className='navbar__header__title'>Hola</div>
                        <button className='navbar__header__btn' onClick={closeNavbar}><i className="fa-solid fa-x"></i></button>
                    </div>

                    <div className='navbar__ul'>
                        {
                            category?.map(categories => <Items navbar={navbar} setTypeDesktop={setTypeDesktop} key={categories.id} setCategoriesType={setCategoriesType} setIsShownCategoriesType={setIsShownCategoriesType} categories={categories}/> )
                        }
                    </div>
                </div>
            
            
            {
                //isActiveType.current.classList.add('categories-type-open')
                isShownCategoriesType && 
            <div ref={isActiveType} onClick={elementStopPropagation} className='card-categories-type'>
                {
                    !typeDesktop &&
                    <div className='navbar__header'>
                        <div onClick={prevNavbar} className='navbar__header__prev'>
                            <div className='navbar__header__simbolo__prev'><i class="fa-solid fa-angle-left"></i></div>
                            <div className='navbar__header__title__type'>Volver al menu principal</div>
                        </div>
                        <button className='navbar__header__btn' onClick={closeNavbar}><i className="fa-solid fa-x"></i></button>
                    </div>
                }
                <ShownCategories categoriesType={categoriesType}/>
            </div>

            }

                 
        </div>
    </div>
    </>
  )           
}

export default NavbarScreen