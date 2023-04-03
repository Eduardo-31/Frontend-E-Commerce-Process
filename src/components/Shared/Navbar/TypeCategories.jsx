import React from 'react'

const TypeCategories = ({type}) => {
  return (
    <div className='categories-type__items'>
      <div className='sub-categories-d-flex'>
        <span className='sub-categories-title'>{type.name}</span>
        <p className='sub-categories'>Ver todo</p>
      </div>
        <ul className='type-categories-ul'>
            {
                type.typeCategories.map(item => 
                  <div className='type-categories-items'>
                    <li className='type-categories-title'>{item.name}</li>
                    <div className='navbar__items__simbolo hidden-simbolo'>
                      <i className="fa-solid fa-angle-right"></i>
                    </div>
                  </div>
                )
            }
        </ul>
    </div>
  )
}

export default TypeCategories