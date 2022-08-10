import React, {useContext, useState} from 'react'
import { AppContext } from './context'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretDown} from '@fortawesome/free-solid-svg-icons'

const Dropdown = (props) => {
  const {placeholder, dataType, fieldType, name, handleChange, formValues, valueList, order, label} = props
  const {selectedItem, setSelectedItem, isActive, setIsActive} = useContext(AppContext)



 let options=[]
    valueList.sort((a,b) => a.order - b.order).forEach(item => {
    options.push(item.name)
  }) 

  console.log(options)


  
  return (
        <>
        <div className='dropdown'>
            <p className='dropdown-header header-label'>{label}</p>
                <btn className='dropdown-btn' onClick={() => setIsActive(!isActive)}>{selectedItem}</btn>
                {console.log(selectedItem)}
                {isActive && (
                    <div>
                    {
                        options.map((option, index) => {
                            return (
                                <div 
                                    key={index} 
                                    onClick={() => {
                                    setSelectedItem(option)
                                    setIsActive(false)
                                    }
                                    }
                                >
                                    {option}
                                </div>
                                )
                        })
                    }
                    </div>
                )}
        </div>
    </>
  )
}

export default Dropdown