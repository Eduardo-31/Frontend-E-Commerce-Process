import React from 'react'
import TypeCategories from './TypeCategories'

const ShownCategories = ({categoriesType}) => {

console.log(categoriesType)
  return (
    <div className='container-categories-type'>

      
        <p className='categories-type__title__header'>{categoriesType.name}</p>  
      
        {
        
            categoriesType.subCategories.length ? 
            <>
              <div className='container-categories-type__items'>
                { 
                  categoriesType.subCategories.map(type => (
                    <TypeCategories key={type.id} type={type}/>
                  )) 
                }
              </div>
            </>
            :
              <h2>Aun no tenemos subcategories</h2>
        }
    </div>
  )
}

export default ShownCategories