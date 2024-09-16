import React from 'react'
import "./answers.css"

const Responses = ({name, email, phonenumber, address, dob, maritalstatus, employmentstatus, occupation, highestqualification, institution1, yearsattended1, course1, qualification2, yearsattended2, course2, institution2, institution3, yearsattended3, course3, qualification3, employerName1,
  employerAddress1,
  yearsEngaged1,
  postHeld1,
  employerName2,
  employerAddress2,
  yearsEngaged2,
  postHeld2,
  employerName3,
  employerAddress3,
  yearsEngaged3,
  postHeld3,
  studyLevel,
  courseChoice,
  preferredCountry,
  travelHistory,
  denialHistory,
  tripBudget,
  sponsor,
  travelPartner,
  travelPartnerList,
  sponsorProvide,
  proofOfFunds,
  howYouHeard, }) => {

  return (
    <div className='responses-div'>
            <p><span>Name:</span> {name}</p>
            <p><span>Email Address:</span> {email}</p>
            <p><span>Phone Number:</span> {phonenumber}</p>
            <p className='extend-p'><span>Address:</span> {address}</p>
            <p><span>Date of Birth:</span> {dob}</p>
            <p><span>Marital Status:</span> {maritalstatus}</p>
            <p><span>Employment Status:</span> {employmentstatus}</p>
            <p><span>Occupation:</span> {occupation} </p>
            <p><span>Highest Qualification:</span> {highestqualification} </p>
            <p><span>First Institution:</span> {institution1}</p>
            <p><span>Years Attended:</span> {yearsattended1} </p>
            <p><span>Course:</span> {course1} </p>
            <p><span>Second Qualification:</span> {qualification2} </p>
            <p><span>Name of second Institution:</span> {institution2}</p>
            <p><span>Years Attended:</span> {yearsattended2} </p>
            <p><span>Course:</span> {course2} </p>
            <p><span>Third Qualification :</span> {qualification3} </p>
            <p><span>Third Institution:</span> {institution3}</p>
            <p><span>Years Attended:</span> {yearsattended3} </p>
            <p><span>Course:</span> {course3} </p>
            <p><span>Employer Name 1:</span> {employerName1} </p>
            <p><span>Employer Address 1:</span> {employerAddress1} </p>
            <p><span>Years Engaged 1:</span> {yearsEngaged1} </p>
            <p><span>Post held 1:</span> {postHeld1} </p>
            <p><span>Employer name 2:</span> {employerName2} </p>
            <p><span>Employer Address 2:</span> {employerAddress2} </p>
            <p><span>Years Engaged 2:</span> {yearsEngaged2} </p>
            <p><span>Post held 2:</span> {postHeld2} </p>
            <p><span>Employer name 3:</span> {employerName3} </p>
            <p><span>Employer Address 3:</span> {employerAddress3} </p>
            <p><span>Years Engaged 3:</span> {yearsEngaged3} </p>
            <p><span>Post held 3:</span> {postHeld3} </p>
            <p className='extend-p' ><span>Study Level</span> {studyLevel} </p>
            <p><span>Course Choice:</span> {courseChoice} </p>
            <p><span>Preferred Country:</span> {preferredCountry} </p>
            <p><span>Travel History:</span> {travelHistory} </p>
            <p><span>Denial History:</span> {denialHistory} </p>
            <p><span>Trip budget:</span> {tripBudget} </p>
            <p><span>Sponsor:</span> {sponsor} </p>
            <p><span>Are you travelling with anyone:</span> {travelPartner} </p>
            <p><span>Travel partner list:</span> {travelPartnerList} </p>
            <p><span>Sponsorship:</span> {sponsorProvide} </p>
            <p><span>Proof of funds:</span> {proofOfFunds} </p>
            <p><span>How you heard:</span> {howYouHeard} </p>

    </div>
  )
}

export default Responses