import React, { useEffect, useRef, useContext, useState } from 'react'
import { AppContext  } from './context'
import PropagateLoader from "react-spinners/PropagateLoader";
import FormInput from './FormInput'
import ProgressBar from "@ramonak/react-progress-bar";

const App = () => {
  const { count, setCount, formValues, handleChange, handleSubmit , loading, setLoading, sortedInputFields, numberOfSteps} = useContext(AppContext)

  const rightNavContainerRef = useRef(null)
  const leftNavContainerRef = useRef(null)





  useEffect(() => {
    setLoading(true)
    let timeOut = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timeOut)
  }, [])
 


  useEffect(() => {
    const containerHeight = rightNavContainerRef.current.getBoundingClientRect().height;
    leftNavContainerRef.current.style.height = `${containerHeight}px`
    console.log(leftNavContainerRef.current.style.height)
  }, [])



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
        <div className='app'>
         <div className='progressBar-container'>
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
            </form>
            {
            count > 1 && (
              <button
                className='btn btn-dark btn-prev' 
                type='button'
                onClick={() => setCount(count - 1)}
              >
                Back
              </button>
            )
           }
           {
            count < numberOfSteps && (
              <button
                className='btn btn-light btn-next' 
                type='button'
                onClick={() => setCount(count + 1)}
              >
                Next
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