import React, { useState } from 'react'
import { inputFields } from './data'


const AppContext = React.createContext()

const AppProvider = ({children}) => {
  const [regLoader, setRegLoader] = useState(false)
  const [loading, setLoading] = useState(false)
  const [loadingStep, setLoadingStep] = useState(false)
  const [formLoader, setFormLoader] = useState(false)


  const [selectedItem, setSelectedItem] = useState('')  
  const [isActive, setIsActive] = useState(false)
  const [english, setEnglish] = useState(true)
  const [spanish, setSpanish] = useState(false)
  const [count, setCount] = useState(1)

    let initialValues = {};
    inputFields.forEach(item => {
      initialValues[item.code] = ''
  })

  let sortedInputFields = inputFields.sort((a,b) => a.order - b.order)

  const numberOfSteps = sortedInputFields.at(-1).step;

  const [formValues, setFormValues] = useState(initialValues)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  {/* const handleChange1 = (e) => {
    const {name, value} = e.target
    setSelectedItem({
      ...selectedItem,
      [name]: value
    })
  } */}



   const handleEnglish = () => {
    setEnglish(true)
    setSpanish(false)
  }

  const handleSpanish = () => {
    setSpanish(true)
    setEnglish(false)
  }


     return (
        <AppContext.Provider value={
            {count, setCount, formValues, setFormValues, handleChange, loading, setLoading, loadingStep, setLoadingStep, formLoader, setFormLoader, regLoader, setRegLoader, handleEnglish, handleSpanish, english, spanish, setEnglish, setSpanish, sortedInputFields, numberOfSteps, selectedItem, setSelectedItem, isActive, setIsActive}
        }>{children}</AppContext.Provider>
    )
}



export {AppContext, AppProvider}