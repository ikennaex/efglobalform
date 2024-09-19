import React, { useState } from "react";
import PaystackPop from "@paystack/inline-js";
import axios from "axios";
import "./form.css";
import baseUrl from "./baseUrl";
import Loader from "./Loader";
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nationality, setNationality] = useState("");
  const [placeOfBirth, setPlaceOfBirth] = useState("");
  const [internationalPassportNumber, setInternationalPassportNumber] =
    useState("");
  const [dateOfIssuePassport, setDateOfIssuePassport] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [nin, setNin] = useState("");
  const [dateIssuedNin, setDateIssuedNin] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [employmentStatus, setEmploymentStatus] = useState("");
  const [occupation, setOccupation] = useState("");
  const [highestQualification, setHighestQualification] = useState("");
  const [institution1, setInstitution1] = useState("");
  const [yearsAttended1, setYearsAttended1] = useState("");
  const [course1, setCourse1] = useState("");
  const [qualification1, setQualification1] = useState("");
  const [institution2, setInstitution2] = useState("");
  const [yearsAttended2, setYearsAttended2] = useState("");
  const [course2, setCourse2] = useState("");
  const [qualification2, setQualification2] = useState("");
  const [institution3, setInstitution3] = useState("");
  const [yearsAttended3, setYearsAttended3] = useState("");
  const [course3, setCourse3] = useState("");
  const [qualification3, setQualification3] = useState("");
  const [employerName1, setEmployerName1] = useState("");
  const [employerAddress1, setEmployerAddress1] = useState("");
  const [yearsEngaged1, setYearsEngaged1] = useState("");
  const [postHeld1, setPostHeld1] = useState("");
  const [employerName2, setEmployerName2] = useState("");
  const [employerAddress2, setEmployerAddress2] = useState("");
  const [yearsEngaged2, setYearsEngaged2] = useState("");
  const [postHeld2, setPostHeld2] = useState("");
  const [employerName3, setEmployerName3] = useState("");
  const [employerAddress3, setEmployerAddress3] = useState("");
  const [yearsEngaged3, setYearsEngaged3] = useState("");
  const [postHeld3, setPostHeld3] = useState("");
  const [studyLevel, setStudyLevel] = useState("");
  const [courseChoice, setCourseChoice] = useState("");
  const [preferredCountry, setPreferredCountry] = useState("");
  const [travelHistory, setTravelHistory] = useState("");
  const [denialHistory, setDenialHistory] = useState("");
  const [denialReasons, setDenialReasons] = useState("");
  const [tripBudget, setTripBudget] = useState("");
  const [sponsor, setSponsor] = useState("");
  const [travelPartner, setTravelPartner] = useState("");
  const [travelPartnerList, setTravelPartnerList] = useState("");
  const [sponsorProvide, setSponsorProvide] = useState("");
  const [proofOfFunds, setProofOfFunds] = useState("");
  const [howYouHeard, setHowYouHeard] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [emergencyContactPhoneNumber, setEmergencyContactPhoneNumber] =
    useState("");
  const [emergencyContactAddress, setEmergencyContactAddress] = useState("");
  const [emergencyContactRelationship, setEmergencyContactRelationship] =
    useState("");
  const [parentFullName, setParentFullName] = useState("");
  const [parentRelationship, setParentRelationship] = useState("");
  const [parentDob, setParentDob] = useState("");
  const [parentCountry, setParentCountry] = useState("");
  const [parentCuurentOccupation, setParentCuurentOccupation] = useState("");
  const [parentFullName2, setParentFullName2] = useState("");
  const [parentRelationship2, setParentRelationship2] = useState("");
  const [parentDob2, setParentDob2] = useState("");
  const [parentCountry2, setParentCountry2] = useState("");
  const [parentCuurentOccupation2, setParentCuurentOccupation2] = useState("");
  const [siblingsInfo, setSiblingsInfo] = useState("");
  const [spouseFullName, setSpouseFullName] = useState("");
  const [spouseMaidenName, setSpouseMaidenName] = useState("");
  const [spouseChangeOfName, setSpouseChangeOfName] = useState("");
  const [spouseGender, setSpouseGender] = useState("");
  const [spouseDob, setSpouseDob] = useState("");
  const [travelChoice, setTravelChoice] = useState("");

  // for checkbox
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckState = (e) => {
    setIsChecked(e.target.checked);
  };

  const submitForm = (e) => {
    // e.preventDefault()

    const data = {
      name: name,
      email: email,
      phonenumber: phoneNumber,
      address: address,
      dob: dob,
      maritalstatus: maritalStatus,
      employmentstatus: employmentStatus,
      occupation: occupation,
      highestqualification: highestQualification,
      institution1: institution1,
      yearsattended1: yearsAttended1,
      course1: course1,
      qualification1: qualification1,
      institution2: institution2,
      yearsattended2: yearsAttended2,
      course2: course2,
      qualification2: qualification2,
      institution3: institution3,
      yearsattended3: yearsAttended3,
      course3: course3,
      qualification3: qualification3,
      employerName1: employerName1,
      employerAddress1: employerAddress1,
      yearsEngaged1: yearsEngaged1,
      postHeld1: postHeld1,
      employerName2: employerName2,
      employerAddress2: employerAddress2,
      yearsEngaged2: yearsEngaged2,
      postHeld2: postHeld2,
      employerName3: employerName3,
      employerAddress3: employerAddress3,
      yearsEngaged3: yearsEngaged3,
      postHeld3: postHeld3,
      studyLevel: studyLevel,
      courseChoice: courseChoice,
      preferredCountry: preferredCountry,
      travelHistory: travelHistory,
      denialHistory: denialHistory,
      tripBudget: tripBudget,
      sponsor: sponsor,
      travelPartner: travelPartner,
      travelPartnerList: travelPartnerList,
      sponsorProvide: sponsorProvide,
      proofOfFunds: proofOfFunds,
      howYouHeard: howYouHeard,

  nationality: nationality,
  placeOfBirth: placeOfBirth,
  internationalPassportNumber: internationalPassportNumber,
  dateOfIssuePassport: dateOfIssuePassport,
  expiryDate: expiryDate,
  nin: nin,
  dateIssuedNin: dateIssuedNin,
  denialReasons: denialReasons,
  emergencyContact: emergencyContact,
  emergencyContactPhoneNumber: emergencyContactPhoneNumber,
  emergencyContactAddress:emergencyContactAddress,
  emergencyContactRelationship: emergencyContactRelationship,
  parentFullName: parentFullName,
  parentRelationship: parentRelationship,
  parentDob: parentDob,
  parentCountry: parentCountry,
  parentCuurentOccupation: parentCuurentOccupation,
  parentFullName2: parentFullName2,
  parentRelationship2: parentRelationship2,
  parentDob2: parentDob2,
  parentCountry2: parentCountry2,
  parentCuurentOccupation2: parentCuurentOccupation2,
  siblingsInfo: siblingsInfo,
  spouseFullName: spouseFullName,
  spouseMaidenName: spouseMaidenName,
  spouseChangeOfName: spouseChangeOfName,
  spouseGender: spouseGender,
  spouseDob: spouseDob, 
  travelChoice: travelChoice,
    };

    const response = axios
      .post(`${baseUrl}/answers`, data)
      .then((response) => {
        if (response.ok) {
          console.log("data has been sent");
        }
      })
      .catch((err) => console.log(err));

    // if the data has been succesfuully sent then clear the boxes
    setName("");
    setPhoneNumber("");
    setEmail("");
    setAddress("");
    setDob("");
    setMaritalStatus("");
    setEmploymentStatus("");
    setOccupation("");
    setHighestQualification("");
    setInstitution1("");
    setYearsAttended1("");
    setCourse1("");
    setQualification1("");
    setInstitution2("");
    setYearsAttended2("");
    setCourse2("");
    setQualification2("");
    setInstitution3("");
    setYearsAttended3("");
    setCourse3("");
    setQualification3("");
    setEmployerName1("");
    setEmployerAddress1("");
    setYearsEngaged1("");
    setPostHeld1("");
    setEmployerName2("");
    setEmployerAddress2("");
    setYearsEngaged2("");
    setPostHeld2("");
    setEmployerName3("");
    setEmployerAddress3("");
    setYearsEngaged3("");
    setPostHeld3("");
    setStudyLevel("");
    setCourseChoice("");
    setPreferredCountry("");
    setTravelHistory("");
    setDenialHistory("");
    setTripBudget("");
    setSponsor("");
    setTravelPartner("");
    setTravelPartnerList("");
    setSponsorProvide("");
    setProofOfFunds("");
    setHowYouHeard("");

    setNationality("");
    setPlaceOfBirth("");
    setInternationalPassportNumber("");
    setDateOfIssuePassport("");
    setExpiryDate("");
    setNin("");
    setDateIssuedNin("");
    setDenialReasons("");
    setEmergencyContact("");
    setEmergencyContactPhoneNumber("");
    setEmergencyContactAddress("");
    setEmergencyContactRelationship("");
    setParentFullName("");
    setParentRelationship("");
    setParentDob("");
    setParentCountry("");
    setParentCuurentOccupation("");
    setParentFullName2("");
    setParentRelationship2("");
    setParentDob2("");
    setParentCountry2("");
    setParentCuurentOccupation2("");
    setSiblingsInfo("");
    setSpouseFullName("");
    setSpouseMaidenName("");
    setSpouseChangeOfName("");
    setSpouseGender("");
    setSpouseDob(""); 
    setTravelChoice("");
  };

  const payWithPaystack = (e) => {
    e.preventDefault();
    if (isChecked) {
      try {
        const paystack = new PaystackPop();
        paystack.newTransaction({
          key: "pk_live_5b8f64c4d8151f810a948bdd49eee5f3690419d7", // live key
          amount: 10000 * 100,
          email: email,
          name: name,
          onSuccess(transaction) {
            submitForm();
            let message = `Payment Complete! ${transaction.id}`;
            alert(message);
          },

          onCancel() {
            alert("You have cancelled this transaction");
          },
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      return;
    }
  };

  return (
    <>
      <div className="efglobalform">
        <div className="">
          <form className="forms" onSubmit={payWithPaystack}>
            <h1 className="header">
              EF Global Travels Study Abroad and Immigration Form{" "}
            </h1>
            <p className="p-warning caution-txt">
              Caution: Please read all instructions before filling this form
            </p>
            <p className="info-text">
              All columns of this Consultation Form must be completed in full to
              guarantee confirmation of your appointment booking and
              consultation slot. Please, kindly fill all columns with the most
              correct and accurate information.{" "}
            </p>

            <p>
              <span className="sections">SECTION A:</span>Please provide the
              below personal details completely and accurately. Make reference
              to your International Passport and other personal documents where
              applicable.
            </p>
            <label>
              Full Name (as it appears on your International Passport, SURNAME
              FIRST, THEN OTHER NAMES):
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              value={name}
            />

            <label>Email Address:</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              value={email}
            />

            <label>Phone Number:</label>
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="text"
              value={phoneNumber}
            />

            <label>Nationality:</label>
            <input
              onChange={(e) => setNationality(e.target.value)}
              type="text"
              value={nationality}
            />

            <label>Place of Birth:</label>
            <input
              onChange={(e) => setPlaceOfBirth(e.target.value)}
              type="text"
              value={placeOfBirth}
            />

            <label>International Passport Number:</label>
            <input
              onChange={(e) => setInternationalPassportNumber(e.target.value)}
              type="text"
              value={internationalPassportNumber}
            />

            <label>Date of Issue:</label>
            <input
              onChange={(e) => setDateOfIssuePassport(e.target.value)}
              type="text"
              value={dateOfIssuePassport}
            />

            <label>Expiry Date:</label>
            <input
              onChange={(e) => setExpiryDate(e.target.value)}
              type="text"
              value={expiryDate}
            />

            <label>Nin:</label>
            <input
              onChange={(e) => setNin(e.target.value)}
              type="text"
              value={nin}
            />

            <label>Date Issued:</label>
            <input
              onChange={(e) => setDateIssuedNin(e.target.value)}
              type="text"
              value={dateIssuedNin}
            />

            <label>Address:</label>
            <input
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              value={address}
            />

            <label>
              Date of Birth (as it appears on your International Passport):
            </label>
            <input
              onChange={(e) => setDob(e.target.value)}
              type="date"
              value={dob}
            />

            <label>Marital Status:</label>

            <div className="radioinput-form">
              <div>
                <input
                  name="marital"
                  onChange={(e) => setMaritalStatus(e.target.value)}
                  checked={maritalStatus === "Single"}
                  type="radio"
                  value="Single"
                />
                Single
              </div>

              <div>
                <input
                  name="marital"
                  onChange={(e) => setMaritalStatus(e.target.value)}
                  checked={maritalStatus === "Married"}
                  type="radio"
                  value="Married"
                />
                Married
              </div>

              <div>
                <input
                  name="marital"
                  onChange={(e) => setMaritalStatus(e.target.value)}
                  checked={maritalStatus === "Divorced"}
                  type="radio"
                  value="Divorved"
                />
                Divorced
              </div>

              <div>
                <input
                  name="marital"
                  onChange={(e) => setMaritalStatus(e.target.value)}
                  checked={maritalStatus === "Seperated"}
                  type="radio"
                  value="Seperated"
                />
                Separated
              </div>

              <div>
                <input
                  name="marital"
                  onChange={(e) => setMaritalStatus(e.target.value)}
                  checked={maritalStatus === "Others"}
                  type="radio"
                  value="Others"
                />
                Others
              </div>
            </div>

            <label>Employment Status:</label>
            <div className="radioinput-form">
              <div>
                <input
                  name="Employment"
                  type="radio"
                  onChange={(e) => setEmploymentStatus(e.target.value)}
                  checked={employmentStatus === "Employed"}
                  value="Employed"
                />
                Employed
              </div>

              <div>
                <input
                  name="Employment"
                  type="radio"
                  onChange={(e) => setEmploymentStatus(e.target.value)}
                  checked={employmentStatus === "Self Employed"}
                  value="Self Employed"
                />
                Self Employed
              </div>

              <div>
                <input
                  name="Employment"
                  type="radio"
                  onChange={(e) => setEmploymentStatus(e.target.value)}
                  checked={employmentStatus === "Unemployed"}
                  value="Unemployed"
                />
                Unemployed
              </div>
            </div>

            <label>Occupation:</label>
            <input
              type="text"
              onChange={(e) => setOccupation(e.target.value)}
              value={occupation}
            />

            <label>Emergency Contact Name:</label>
            <input
              type="text"
              onChange={(e) => setEmergencyContact(e.target.value)}
              value={emergencyContact}
            />

            <label>Emergency Contact Phone Number:</label>
            <input
              type="text"
              onChange={(e) => setEmergencyContactPhoneNumber(e.target.value)}
              value={emergencyContactPhoneNumber}
            />

            <label>Emergency Contact Address:</label>
            <input
              type="text"
              onChange={(e) => setEmergencyContactAddress(e.target.value)}
              value={emergencyContactAddress}
            />

            <label>Emergency Contact Relationship:</label>
            <input
              type="text"
              onChange={(e) => setEmergencyContactRelationship(e.target.value)}
              value={emergencyContactRelationship}
            />

            <label>Parent Full Name:</label>
            <input
              type="text"
              onChange={(e) => setParentFullName(e.target.value)}
              value={parentFullName}
            />

            <label>Parent Relationship:</label>
            <input
              type="text"
              onChange={(e) => setParentRelationship(e.target.value)}
              value={parentRelationship}
            />

            <label>Parent Date of Birth, with Year, Month and Day:</label>
            <input
              type="date"
              onChange={(e) => setParentDob(e.target.value)}
              value={parentDob}
            />

            <label>Parent Country and Territory/City of Birth:</label>
            <input
              type="text"
              onChange={(e) => setParentCountry(e.target.value)}
              value={parentCountry}
            />

            <label>Parent Current Occupation:</label>
            <input
              type="text"
              onChange={(e) => setParentCuurentOccupation(e.target.value)}
              value={parentCuurentOccupation}
            />

            <label>Parent Full Name:</label>
            <input
              type="text"
              onChange={(e) => setParentFullName2(e.target.value)}
              value={parentFullName2}
            />

            <label>Parent Relationship:</label>
            <input
              type="text"
              onChange={(e) => setParentRelationship2(e.target.value)}
              value={parentRelationship2}
            />

            <label>Parent Date of Birth, with Year, Months and Day:</label>
            <input
              type="text"
              onChange={(e) => setParentDob2(e.target.value)}
              value={parentDob2}
            />

            <label>Parent Country and Territory/City of Birth:</label>
            <input
              type="text"
              onChange={(e) => setParentCountry2(e.target.value)}
              value={parentCountry2}
            />

            <label>Parent Current Occupation:</label>
            <input
              type="text"
              onChange={(e) => setParentCuurentOccupation2(e.target.value)}
              value={parentCuurentOccupation2}
            />

            <label>
              Siblings Info: Provide the following information for each of your
              siblings (FULL NAME, RELATIONSHIP, DATE OF BIRTH, COUNTRY OF
              ORIGIN, CURRENT OCCUPATION)
            </label>
            <textarea
              type="text"
              onChange={(e) => setSiblingsInfo(e.target.value)}
              value={siblingsInfo}
            />

            <label>Spouse Full Name:</label>
            <input
              type="text"
              onChange={(e) => setSpouseFullName(e.target.value)}
              value={spouseFullName}
            />

            <label>Spouse Maiden Name (If applicable):</label>
            <input
              type="text"
              onChange={(e) => setSpouseMaidenName(e.target.value)}
              value={spouseMaidenName}
            />

            <label>Spouse Change of Name (If any):</label>
            <input
              type="text"
              onChange={(e) => setSpouseChangeOfName(e.target.value)}
              value={spouseChangeOfName}
            />

            <label>Spouse Gender:</label>
            <input
              type="text"
              onChange={(e) => setSpouseGender(e.target.value)}
              value={spouseGender}
            />

            <label>Spouse Date of Birth:</label>
            <input
              type="text"
              onChange={(e) => setSpouseDob(e.target.value)}
              value={spouseDob}
            />

            <label>Travel Type: (eg: Study, work, Visit or Others (Please Specify))</label>
            <input
              type="text"
              onChange={(e) => setTravelChoice(e.target.value)}
              value={travelChoice}
            />



            <p>
              <span className="sections">SECTION B:</span>Please provide your
              educational details below completely and accurately. Make
              reference to your credentials or academic documents where
              applicable. Please list all Qualifications as well as all
              Secondary (High School) and Post-Secondary Institutions you have
              attended till date (list the most recent first):
            </p>

            <label>
              Highest Qualification (Please kindly state your current
              qualification in details, e.g, BSc in Biochemistry):
            </label>
            <input
              type="text"
              onChange={(e) => setHighestQualification(e.target.value)}
              value={highestQualification}
            />

            <label>Name of Institution 1:</label>
            <input
              type="text"
              onChange={(e) => setInstitution1(e.target.value)}
              value={institution1}
            />

            <label>Years Attended (e.g January 2009 - September 2013):</label>
            <input
              type="text"
              onChange={(e) => setYearsAttended1(e.target.value)}
              value={yearsAttended1}
            />

            <label>Course/Discipline: (e.g Biochemistry):</label>
            <input
              type="text"
              onChange={(e) => setCourse1(e.target.value)}
              value={course1}
            />

            <label>
              Qualification Awarded, Grade and CGPA (e.g Bachelor of Science,
              BSc / Second Class Upper / CGPA 3.46):
            </label>
            <input
              type="text"
              onChange={(e) => setQualification1(e.target.value)}
              value={qualification1}
            />

            <label>Name of Institution 2:</label>
            <input
              type="text"
              onChange={(e) => setInstitution2(e.target.value)}
              value={institution2}
            />

            <label>Years Attended (e.g January 2009 - September 2013):</label>
            <input
              type="text"
              onChange={(e) => setYearsAttended2(e.target.value)}
              value={yearsAttended2}
            />

            <label>Course/Discipline: (e.g Biochemistry):</label>
            <input
              type="text"
              onChange={(e) => setCourse2(e.target.value)}
              value={course2}
            />

            <label>
              Qualification Awarded, Grade and CGPA (e.g Bachelor of Science,
              BSc / Second Class Upper / CGPA 3.46):
            </label>
            <input
              type="text"
              onChange={(e) => setQualification2(e.target.value)}
              value={qualification2}
            />

            <label>Name of Institution 3:</label>
            <input
              type="text"
              onChange={(e) => setInstitution3(e.target.value)}
              value={institution3}
            />

            <label>Years Attended (e.g January 2009 - September 2013):</label>
            <input
              type="text"
              onChange={(e) => setYearsAttended3(e.target.value)}
              value={yearsAttended3}
            />

            <label>Course/Discipline: (e.g Biochemistry):</label>
            <input
              type="text"
              onChange={(e) => setCourse3(e.target.value)}
              value={course3}
            />

            <label>
              Qualification Awarded, Grade and CGPA (e.g Bachelor of Science,
              BSc / Second Class Upper / CGPA 3.46):
            </label>
            <input
              type="text"
              onChange={(e) => setQualification3(e.target.value)}
              value={qualification3}
            />

            <p>
              <span className="sections">
                SECTION C - EMPLOYMENT HISTORY OR OCCUPATIONAL PROFILE:{" "}
              </span>
              Please provide your employment details below completely and
              accurately. Make reference to your Resume or CV where applicable.
              Please list all employers/companies or your own self employed
              businesses (as applicable) that you have been engaged till date
              (list the most recent first).
            </p>

            <label>Name of Employer 1:</label>
            <input
              type="text"
              onChange={(e) => setEmployerName1(e.target.value)}
              value={employerName1}
            />

            <label>Employer Address 1 (e.g Victoria Island, Lagos):</label>
            <input
              type="text"
              onChange={(e) => setEmployerAddress1(e.target.value)}
              value={employerAddress1}
            />

            <label>Year engaged 1 (e.g January 2009 - September 2013):</label>
            <input
              type="text"
              onChange={(e) => setYearsEngaged1(e.target.value)}
              value={yearsEngaged1}
            />

            <label>Designation / Post Held 1:</label>
            <input
              type="text"
              onChange={(e) => setPostHeld1(e.target.value)}
              value={postHeld1}
            />

            <label>Employer Name 2:</label>
            <input
              type="text"
              onChange={(e) => setEmployerName2(e.target.value)}
              value={employerName2}
            />

            <label>Employer Address 2 (e.g Victoria Island, Lagos):</label>
            <input
              type="text"
              onChange={(e) => setEmployerAddress2(e.target.value)}
              value={employerAddress2}
            />

            <label>Years Engaged 2 (e.g January 2009 - September 2013):</label>
            <input
              type="text"
              onChange={(e) => setYearsEngaged2(e.target.value)}
              value={yearsEngaged2}
            />

            <label>Designation / Post Held 2:</label>
            <input
              type="text"
              onChange={(e) => setPostHeld2(e.target.value)}
              value={postHeld2}
            />

            <label>Employer Name 3:</label>
            <input
              type="text"
              onChange={(e) => setEmployerName3(e.target.value)}
              value={employerName3}
            />

            <label>Employer Address 3 (e.g Victoria Island, Lagos):</label>
            <input
              type="text"
              onChange={(e) => setEmployerAddress3(e.target.value)}
              value={employerAddress3}
            />

            <label>Years Engaged 3 (e.g January 2009 - September 2013):</label>
            <input
              type="text"
              onChange={(e) => setYearsEngaged3(e.target.value)}
              value={yearsEngaged3}
            />

            <label>Designation / Post Held 3:</label>
            <input
              type="text"
              onChange={(e) => setPostHeld3(e.target.value)}
              value={postHeld3}
            />

            {/* Section D  */}
            <p>
              <span className="sections">
                SECTION D - STUDY ABROAD SERVICE REQUEST INFORMATION:{" "}
              </span>
              In this section, kindly specify some critical information about
              your service request. If your option doesn't appear on the list,
              please select ''other'' and provide your customized response.
            </p>

            <label>Requested Level of Study Abroad:</label>
            <div className="radioinput-form">
              <div>
                <input
                  name="studylevel"
                  onChange={(e) => setStudyLevel(e.target.value)}
                  checked={
                    studyLevel ===
                    "Post Doctoral Research Assistantships or Fellowships"
                  }
                  type="radio"
                  value="Post Doctoral Research Assistantships or Fellowships"
                />
                Post Doctoral Research Assistantships or Fellowships
              </div>

              <div>
                <input
                  name="studylevel"
                  onChange={(e) => setStudyLevel(e.target.value)}
                  checked={
                    studyLevel ===
                    "Doctorate Degree or Doctor of Philosophy, PhD"
                  }
                  type="radio"
                  value="Doctorate Degree or Doctor of Philosophy, PhD"
                />
                Doctorate Degree or Doctor of Philosophy, PhD
              </div>

              <div>
                <input
                  name="studylevel"
                  onChange={(e) => setStudyLevel(e.target.value)}
                  checked={studyLevel === "Masters Degree"}
                  type="radio"
                  value="Masters Degree"
                />
                Masters Degree
              </div>

              <div>
                <input
                  name="studylevel"
                  onChange={(e) => setStudyLevel(e.target.value)}
                  checked={studyLevel === "Bachelors Degree"}
                  type="radio"
                  value="Bachelors Degree"
                />
                Bachelors Degree
              </div>

              <div>
                <input
                  name="studylevel"
                  onChange={(e) => setStudyLevel(e.target.value)}
                  checked={studyLevel === "Post Graduate Diploma"}
                  type="radio"
                  value="Post Graduate Diploma"
                />
                Post Graduate Diploma
              </div>

              <div>
                <input
                  name="studylevel"
                  onChange={(e) => setStudyLevel(e.target.value)}
                  checked={
                    studyLevel === "Undergraduate Diploma or Certificate"
                  }
                  type="radio"
                  value="Undergraduate Diploma or Certificate"
                />
                Undergraduate Diploma or Certificate
              </div>
            </div>

            <label>Requested or Preferred Choice of Course:</label>
            <input
              type="text"
              onChange={(e) => setCourseChoice(e.target.value)}
              value={courseChoice}
            />

            <label>
              Preferred Country(ies) are you Applying To (if applicable):
            </label>
            <input
              type="text"
              onChange={(e) => setPreferredCountry(e.target.value)}
              value={preferredCountry}
            />

            {/* Section E  */}
            <p>
              <span className="sections">
                SECTION E - TRAVEL HISTORY & OTHER DETAILS:
              </span>
              In this section, kindly give us detailed information about your
              travel history as applicable. If the questions asked don't
              describe your situation, kindly type "NOT APPLICABLE" as your
              response.
            </p>

            <label>
              Travel History (Please, list all the countries you travelled to in
              the last ten (10) years):
            </label>
            <input
              type="text"
              onChange={(e) => setTravelHistory(e.target.value)}
              value={travelHistory}
            />

            <label>Have you been denied visa to any country before:</label>
            <input
              type="text"
              onChange={(e) => setDenialHistory(e.target.value)}
              value={denialHistory}
            />

            <label>If you answered YES above, state the reason(s) for denial of each of the countries</label>
            <textarea
              type="text"
              onChange={(e) => setDenialReasons(e.target.value)}
              value={denialReasons}
            />

            <label>
              How much are you budgeting for your study? choose between $15,000
              and $25,000:
            </label>
            <input
              type="text"
              onChange={(e) => setTripBudget(e.target.value)}
              value={tripBudget}
            />

            <label> Who is sponsoring your study/trip abroad? </label>
            <div className="radioinput-form">
              <div>
                <input
                  name="sponsor"
                  onChange={(e) => setSponsor(e.target.value)}
                  checked={
                    sponsor === "I am sponsoring only myself for this trip"
                  }
                  type="radio"
                  value="I am sponsoring only myself for this trip"
                />
                I am sponsoring only myself for this trip
              </div>

              <div>
                <input
                  name="sponsor"
                  onChange={(e) => setSponsor(e.target.value)}
                  checked={
                    sponsor ===
                    "I am sponsoring myself and spouse for this trip"
                  }
                  type="radio"
                  value="I am sponsoring myself and spouse for this trip"
                />
                I am sponsoring myself and spouse for this trip
              </div>

              <div>
                <input
                  name="sponsor"
                  onChange={(e) => setSponsor(e.target.value)}
                  checked={
                    sponsor ===
                    "I am sponsoring myself and family for this trip"
                  }
                  type="radio"
                  value="I am sponsoring myself and family for this trip"
                />
                I am sponsoring myself and family for this trip
              </div>

              <div>
                <input
                  name="sponsor"
                  onChange={(e) => setSponsor(e.target.value)}
                  checked={
                    sponsor ===
                    "I am sponsoring myself and someone else for this trip"
                  }
                  type="radio"
                  value="I am sponsoring myself and someone else for this trip"
                />
                I am sponsoring myself and someone else for this trip
              </div>

              <div>
                <input
                  name="sponsor"
                  onChange={(e) => setSponsor(e.target.value)}
                  checked={sponsor === "Someone is sponsoring me for this trip"}
                  type="radio"
                  value="Someone is sponsoring me for this trip"
                />
                Someone is sponsoring me for this trip
              </div>

              <div>
                <input
                  name="sponser"
                  onChange={(e) => setSponsor(e.target.value)}
                  checked={
                    sponsor === "My company is sponsoring me for this trip"
                  }
                  type="radio"
                  value="My company is sponsoring me for this trip"
                />
                My company is sponsoring me for this trip
              </div>
            </div>

            <label>
              Are you planning to travel together with someone for this trip?
            </label>
            <input
              type="text"
              onChange={(e) => setTravelPartner(e.target.value)}
              value={travelPartner}
            />

            <label>
              If your response for the above question is YES, please kindly list
              the accompany person(s) details (name & phone number):
            </label>
            <input
              type="text"
              onChange={(e) => setTravelPartnerList(e.target.value)}
              value={travelPartnerList}
            />

            <label>How did you hear about us:</label>
            <div className="radioinput-form">
              <div>
                <input
                  name="howyouheard"
                  onChange={(e) => setHowYouHeard(e.target.value)}
                  checked={howYouHeard === "From our Company Website"}
                  type="radio"
                  value="From our Company Website"
                />
                From our Company Website
              </div>

              <div>
                <input
                  name="howyouheard"
                  onChange={(e) => setHowYouHeard(e.target.value)}
                  checked={howYouHeard === "From our Facebook Page"}
                  type="radio"
                  value="From our Facebook Page"
                />
                From our Facebook Page
              </div>

              <div>
                <input
                  name="howyouheard"
                  onChange={(e) => setHowYouHeard(e.target.value)}
                  checked={howYouHeard === "From our Instagram Page"}
                  type="radio"
                  value="From our Instagram Page"
                />
                From our Instagram Page
              </div>

              <div>
                <input
                  name="howyouheard"
                  onChange={(e) => setHowYouHeard(e.target.value)}
                  checked={howYouHeard === "From our Twitter Page"}
                  type="radio"
                  value="From our Twitter Page"
                />
                From our Twitter Page
              </div>

              <div>
                <input
                  name="howyouheard"
                  onChange={(e) => setHowYouHeard(e.target.value)}
                  checked={howYouHeard === "From Industry Event / Exhibitions"}
                  type="radio"
                  value="From Industry Event / Exhibitions"
                />
                From Industry Event / Exhibitions
              </div>

              <div>
                <input
                  name="howyouheard"
                  onChange={(e) => setHowYouHeard(e.target.value)}
                  checked={howYouHeard === "From a Referral"}
                  type="radio"
                  value="From a Referral"
                />
                From a Referral
              </div>
            </div>

            <label className="termsandconditioncheck" htmlFor="">
              <input
                checked={isChecked}
                onChange={handleCheckState}
                type="checkbox"
                name=""
                id=""
              />
              <p>
                {" "}
                I agree to the
                <a
                  target="_blank"
                  href="https://efglobaltravels.com/terms-and-conditions"
                  className="termsandconditiontxt"
                >
                  Terms and Conditions
                </a>
                of EF GLOBAL TRAVELS{" "}
              </p>
            </label>

            {isChecked === false ? (
              <p className="p-warning">
                Please check the box before submiting this form
              </p>
            ) : (
              ""
            )}

            <p className="info-text">
              {" "}
              By completing and submitting this form, you agree to fulfill a
              time payment of N10,000 for the consultation fee. You will be
              directed to a secure payment gateway
            </p>

            <button className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
