import React from 'react'
import Dropdown from './Dropdown'

const FormInput = (props) => {
  const {
    name,
    label,
    dataType,
    defaultValue,
    formValues,
    handleChange,
    fieldType,
    valueList,
    order
  } = props

  switch(fieldType) {
    case 'string':
      return (
        <>
          <label className='form-label'>{label}</label>
          <input 
              placeholder={defaultValue}
              type={dataType}
              className='form-control'
              name={name}
              onChange={handleChange} 
              value={formValues}
          />
        </>
      )
    case 'dropdown':
      return (
        <Dropdown placeholder={defaultValue}
              dataType={dataType}
              fieldType={fieldType}
              name={name}
              handleChange={handleChange} 
              formValues={formValues}
              valueList={valueList}
              label={label}
              order={order}
          />
      )
  }
}

export default FormInput