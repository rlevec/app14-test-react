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

  console.log(options[0])

  ///const [selectedOption, setSelectedOption] = useState();
  return (
    <>
      <h4>{label}</h4>
      <select
        value={formValues}
        onChange={handleChange}>
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
      <div></div>
      </>
  );

  {/*}
  const [selectedOption, setSelectedOption] = useState();
  return (
      <select
        value={selectedOption}
        onChange={e => setSelectedOption(e.target.value)}>
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
  );
        */}
{/*
  return (
        <>
        <div className='dropdown'>
            <p className='dropdown-header header-label'>{label}</p>
                <div className='dropdown-btn' onClick={() => setIsActive(!isActive)}>{selectedItem}
                          <span>
                            <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
                          </span>
                </div>
                {console.log(selectedItem)}
                {isActive && (
                    <select>
                    {
                        options.map((option, index) => {
                            return (
                                <select 
                                    key={index} 
                                    onClick={() => {
                                    setSelectedItem(option)
                                    setIsActive(false)
                                    }
                                    }
                                >
                                    {option}
                                </select>
                                )
                        })
                    }
                    </select>
                )}
        </div>
    </>
                ) */}
}

export default Dropdown