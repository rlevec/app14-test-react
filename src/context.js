import React, { useState, useRef } from 'react'
import { inputFields } from './data'


const AppContext = React.createContext()

const AppProvider = ({children}) => {
  const [regLoader, setRegLoader] = useState(false)
  const [loading, setLoading] = useState(false)
  const [loadingStep, setLoadingStep] = useState(false)
  const [formLoader, setFormLoader] = useState(false)
  const rightNavContainerRef = useRef(null)
  const leftNavContainerRef = useRef(null)
  const [selectedItem, setSelectedItem] = useState('')  
  const [isActive, setIsActive] = useState(false)
  const [count, setCount] = useState(1)
  const [data, setData] = useState([])
  const [showTerms, setShowTerms] = useState(false)
  const [isSubmit, setIsSubmit] = useState(false)
  const [lastStep, setLastStep] = useState(false)

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

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmit(true)
    setData(formValues.forEach((item) => item.name))
  }


  
  const [language, setLanguage] = useState('en')

  const currentLanguage = language

  const multiLanguage = {
    en: {
      'prevButton': 'Back',
      'nextButton': 'Next'
    },
    esp: {
      'prevButton': 'Espalda',
      'nextButton': 'Siguente'
    }
  }





     return (
        <AppContext.Provider value={
            {count, setCount, formValues, setFormValues, handleChange, loading, setLoading, loadingStep, setLoadingStep, formLoader, setFormLoader, regLoader, setRegLoader, sortedInputFields, numberOfSteps, selectedItem, setSelectedItem, isActive, setIsActive, language, setLanguage, currentLanguage, multiLanguage, rightNavContainerRef, leftNavContainerRef, handleSubmit, showTerms, setShowTerms, isSubmit, setIsSubmit, lastStep, setLastStep}
        }>{children}</AppContext.Provider>
    )
}



export {AppContext, AppProvider}