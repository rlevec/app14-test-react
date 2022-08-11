import React, { useEffect, useContext } from 'react'
import { AppContext  } from './context'
import PropagateLoader from "react-spinners/PropagateLoader";
import FormInput from './FormInput'
import ProgressBar from "@ramonak/react-progress-bar";
import TermsOfServiceComponent from './TermsOfServiceComponent';

const App = () => {
  const { count, setCount, formValues, handleChange, handleSubmit , loading, setLoading, sortedInputFields, numberOfSteps, language, setLanguage, currentLanguage, multiLanguage, rightNavContainerRef, leftNavContainerRef, isSubmit, setRegLoader, setIsSubmit, lastStep, setLastStep} = useContext(AppContext)




  let labelValues = [];
   sortedInputFields.forEach((item) => {
    labelValues.push(item.name)
  })

  let labelObjects = {... labelValues}
  console.log(labelObjects[0])





  {
   //label mutliLanguage 
   /*const labelLanguage = (language, labels) => {
   if(language === 'esp') {
    labels[0]: 'nombre de usuario'
    
   }
  }
  */}
 





  useEffect(() => {
    setLoading(true)
    let timeOut = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timeOut)
  }, [])

  useEffect(() => {
    setRegLoader(true)
    let timeOut = setTimeout(() => {
      setRegLoader(false)
      setIsSubmit(false)
    }, 7000)
    return () => clearTimeout(timeOut)
  }, [isSubmit])

 


  useEffect(() => {
    const containerHeight = rightNavContainerRef.current.getBoundingClientRect().height;
    leftNavContainerRef.current.style.height = `${containerHeight}px`
  }, [])

  useEffect(() => {
    leftNavContainerRef.current.style.height = `120vh`
  }, [isSubmit])

  useEffect(() => {
    leftNavContainerRef.current.style.height = `120vh`
  }, [lastStep])





  return (
    <>
     <div className='container-whole'>
      {
        loading ? (
          <PropagateLoader className='loader' size={30} color={"#002D62"} loading={loading}
        />) : (

      <>
      <div className='left-side-nav' ref={leftNavContainerRef}>
        <div className='image-container'>
          <img src='https://i.imgur.com/uR4AR4i.png' alt='logo' className='logo-image'/>
        </div>
      </div>
      <div className='right-side-nav' ref={rightNavContainerRef}>
        {isSubmit && (
          <div className='registration-complete'>Registration Complete</div>
        )}    
        <div className='app'>
          <div className='language-container'>
            <button onClick={() => setLanguage('en')} className='eng-btn'></button>
            <button onClick={() => setLanguage('esp')} className='spa-btn'></button>
          </div>
         <div className='progressBar-container progressBar-container-step4'>
              <ProgressBar completed={count} maxCompleted={numberOfSteps} labelClassName="labelBar"/>
               </div>
               <form className='col-15 form' onSubmit={handleSubmit}>
                {
                sortedInputFields
                  .filter(input => input.step === count)
                  .map((inputField, index) => {
                    const {code, name, fieldType, dataType, order, defaultValue, required, step, valueList, validators} = inputField
                    return (
                      <>
                        <FormInput
                          key={index}
                          name={code}
                          label={name}
                          fieldType={fieldType}
                          dataType={dataType}
                          order={order}
                          defaultValue={defaultValue}
                          required={required}
                          step={step}
                          valueList={valueList}
                          validators={validators}
                          formValues={formValues.code}
                          handleChange={handleChange}
                        />
                      </>
                    )
                  })
             }
            {
              count === numberOfSteps && (
                <TermsOfServiceComponent />
              )
            }
            {
              count === numberOfSteps && setLastStep(true)
            }
            </form>
            {
            count > 1 && (
              <button
                name='prevBtn'
                className='btn btn-dark btn-prev' 
                type='button'
                onClick={() => setCount(count - 1)}
              >
                {multiLanguage[currentLanguage]['prevButton']}
              </button>
            )
           }
           {
            count < numberOfSteps && (
              <button
                name='nextBtn'
                className='btn btn-light btn-next' 
                type='button'
                onClick={() => setCount(count + 1)}
              >
                {multiLanguage[currentLanguage]['nextButton']}
              </button>
            )
            }
        </div>
      </div> 
      </>)}
    </div>  
    </>
  )
}

export default App