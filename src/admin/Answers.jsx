import React, { useState, useEffect } from 'react'
import "./answers.css"
import Responses from './Responses'
import baseUrl from '../baseUrl'
import Loader from '../Loader'

const Answers = () => {

  const [responses, setResponses] = useState([])

  useEffect(() => {
    fetch(`${baseUrl}/admin`).then(response => {
      response.json().then(responseDb => {
        setResponses(responseDb)
        console.log(responseDb)
      })
    })
  }, [])

  return (
    <div className='results-container'>
      <div className='formresult-div'>
        <h2>Form Results</h2>
        </div>

        <div className='answers-display'>
          <div className='result-options'>
            <div><p>Responses</p></div>
            <div><p>Draft</p></div>
          </div>

          <div className='reponses-container'>
            {responses.length? responses.map(response => (
              <Responses {...response} key={response._id} />
            )) : <Loader />}
          </div>
        </div>

    </div>
  )
}

export default Answers