import React from 'react'
import "./answers.css"

const Responses = ({name, email, phonenumber, address, dob, maritalstatus, employmentstatus, occupation, employername, jobtitle, highestqualification, institution1, yearsattended1, course1, qualification1, qualification2, yearsattended2, course2, institution3, yearsattended3, course3, qualification3 }) => {

  return (
    <div className='responses-div'>
            <p><span>Name:</span> {name}</p>
            <p><span>Email Address:</span> {email}</p>
            <p><span>Phone Number:</span> {phonenumber}</p>
            <p className='address-p'><span>Address:</span> {address}</p>
            <p><span>Date of Birth:</span> {dob}</p>
            <p><span>Marital Status:</span> {maritalstatus}</p>
            <p><span>Employment Status:</span> {employmentstatus}</p>
            <p><span>Occupation:</span> {occupation} </p>
            <p><span>Employer Name:</span> {employername} </p>
            <p><span>Job Title:</span> {jobtitle} </p>
            <p><span>Highest Qaulification:</span> {highestqualification} </p>
            <p><span>First Institution:</span> {institution1}</p>
            <p><span>Years Attended:</span> {yearsattended1} </p>
            <p><span>Course:</span> {course1} </p>
            <p><span>Qualification:</span> {qualification1} </p>
            <p><span>Second Institution:</span> {qualification2}</p>
            <p><span>Years Attended:</span> {yearsattended2} </p>
            <p><span>Course:</span> {course2} </p>
            <p><span>Qualification:</span> {qualification2} </p>
            <p><span>Third Institution:</span> {institution3}</p>
            <p><span>Years Attended:</span> {yearsattended3} </p>
            <p><span>Course:</span> {course3} </p>
            <p><span>Qualification:</span> {qualification3} </p>
    </div>
  )
}

export default Responses