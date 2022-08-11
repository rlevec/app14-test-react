import React, { useContext } from 'react'
import {terms} from './termsOfService'
import { AppContext } from './context'

const TermsOfServiceComponent = () => {
  const {showTerms, setShowTerms} = useContext(AppContext)
  return (
    <>
        <div className='terms-body'>
            <div className='terms-box'>
            <div className='terms-text'>
                <h2>terms of service</h2>
                <p>Last Edit: 07/26/2022'</p>
                <p>Greetings Users, </p>
                {terms}
            </div>
            <h3>I agree to the <span>Terms of Service</span> and I read the Privacy Notice.</h3>
            <div className='terms-buttons'>
                {showTerms &&  <button type='submit' className='submit-btn'>Submit</button>}
                <button className='btn-accept red-btn' onClick={() => setShowTerms(true)}>Accept</button>
                <button className='btn-decline gray-btn' onClick={() => setShowTerms(false)}>Decline</button>
            </div>
            </div>
        </div>
    </>
  )
}

export default TermsOfServiceComponent