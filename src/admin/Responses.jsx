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
  howYouHeard,

  nationality,
  placeOfBirth,
  internationalPassportNumber,
  dateOfIssuePassport,
  expiryDate,
  nin,
  dateIssuedNin,
  denialReasons,
  emergencyContact,
  emergencyContactPhoneNumber,
  emergencyContactAddress,
  emergencyContactRelationship,
  parentFullName,
  parentRelationship,
  parentDob,
  parentCountry,
  parentCuurentOccupation,
  parentFullName2,
  parentRelationship2,
  parentDob2,
  parentCountry2,
  parentCuurentOccupation2,
  siblingsInfo,
  spouseFullName,
  spouseMaidenName,
  spouseChangeOfName,
  spouseGender,
  spouseDob,
  travelChoice,}) => {

  return (
    <div className='responses-div'>
            <p><span>Name:</span> {name}</p>
            <p><span>Email Address:</span> {email}</p>
            <p><span>Phone Number:</span> {phonenumber}</p>
            <p className='extend-p'><span>Address:</span> {address}</p>
            <p><span>Date of Birth:</span> {dob}</p>
            <p><span>Nationality:</span> {nationality} </p>
            <p><span>Place of Birth:</span> {placeOfBirth} </p>
            <p><span>International Passport Number:</span> {internationalPassportNumber} </p>
            <p><span>Date of Issue Passport:</span> {dateOfIssuePassport} </p>
            <p><span>Expiry date Passport:</span> {expiryDate} </p>
            <p><span>NIN:</span> {nin} </p>
            <p><span>Date Issued NIN:</span> {dateIssuedNin} </p>
            <p><span>Emergency Contact Name:</span> {emergencyContact} </p>
            <p><span>Emergency Contact Phone Number:</span> {emergencyContactPhoneNumber} </p>
            <p><span>Emergency Contact Address:</span> {emergencyContactAddress} </p>
            <p><span>Emergency Contact Relationship:</span> {emergencyContactRelationship} </p>
            <p><span>Parent 1 Full Name:</span> {parentFullName } </p>
            <p><span>Parent 1 Relationship:</span> {parentRelationship } </p>
            <p><span>Parent 1 DOB:</span> {parentDob } </p>
            <p><span>Parent 1 Country:</span> {parentCountry } </p>
            <p><span>Parent 1 Current Occupation:</span> {parentCuurentOccupation } </p>
            <p><span>Parent 2 Full Name:</span> {parentFullName2 } </p>
            <p><span>Parent 2 Relationship:</span> {parentRelationship2 } </p>
            <p><span>Parent 2 DOB:</span> {parentDob2 } </p>
            <p><span>Parent 2 Country:</span> {parentCountry2 } </p>
            <p><span>Parent 2 Current Occupation:</span> {parentCuurentOccupation2 } </p>
            <p><span>Siblings Info:</span> {siblingsInfo } </p>
            <p><span>Spouse Full Name:</span> {spouseFullName } </p>
            <p><span>Spouse Maiden Name:</span> {spouseMaidenName } </p>
            <p><span>Spouse Change of Name:</span> {spouseChangeOfName } </p>
            <p><span>Spouse Gender:</span> {spouseGender } </p>
            <p><span>Spouse DOB:</span> {spouseDob } </p>
            <p><span>Travel Choice:</span> {travelChoice } </p>
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
            <p><span>Denial Reasons:</span> {denialReasons } </p>
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