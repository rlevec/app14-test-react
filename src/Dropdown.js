import React from "react"

const Dropdown = (props) => {
  const {name, handleChange, formValues, valueList, order, label} = props





 let options=[]
    valueList.sort((a,b) => a.order - b.order).forEach(item => {
    options.push(item.value)
  }) 

  



  return (
        <>
        <h4 className='form-label-dropdown'>{label}</h4>
        <select
          className='dropdown-select'
          name={name}
          value={formValues}
          onChange={handleChange}>
          {options.map((option, index) => (
            <option key={index} className='dropdown-container'>{option}
            </option>
          ))}
      </select>
      <div></div>
    </>
                ) 
}

export default Dropdown