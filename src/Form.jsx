import React, { useState } from "react";
import PaystackPop from "@paystack/inline-js";
import axios from "axios";
import "./form.css";
import baseUrl from "./baseUrl";
import Loader from "./Loader";
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [employmentStatus, setEmploymentStatus] = useState("");
  const [occupation, setOccupation] = useState("");
  const [employerName, setEmployerName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
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
      employername: employerName,
      jobtitle: jobTitle,
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
    };

    const response = axios
      .post(`${baseUrl}/answers`, data)
      .then((response) => {
        console.log("request has been sent");
        console.log(response);

        if (response.ok) {
        }
      })
      .catch((err) => console.log(err));

    console.log(response);

    setName("");
    setPhoneNumber("");
    setEmail("");
    setAddress("");
    setDob("");
    setMaritalStatus("");
    setEmploymentStatus("");
    setOccupation("");
    setEmployerName("");
    setJobTitle("");
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
  };

  const payWithPaystack = (e) => {
    e.preventDefault();
    if (isChecked) {
        try {
          const paystack = new PaystackPop();
          paystack.newTransaction({
            key: "pk_test_137bbc49ca285f203537970ed5d0c78512b5543c",
            amount: 10000 * 100,
            email: email,
            name: name,
            onSuccess(transaction) {
              submitForm();
              let message = `Payment Complete! We have received your details and will get back to you shortly`;
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
        return
    }
  };

  return (
    <>
      <div className="efglobalform">
        <h1 className="header">EF Global Travels Forms </h1>

        <div className="">
          <form className="forms" onSubmit={payWithPaystack}>
            <p className="p-warning caution-txt">Caution: Please read all instructions before filling this form</p>
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
              Full Name (as it appears on your International Passport):
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
              <label>
                <input
                  name="marital"
                  onChange={(e) => setMaritalStatus(e.target.value)}
                  checked={maritalStatus === "Single"}
                  type="radio"
                  value="Single"
                />
                Single
              </label>

              <label>
                <input
                  name="marital"
                  onChange={(e) => setMaritalStatus(e.target.value)}
                  checked={maritalStatus === "Married"}
                  type="radio"
                  value="Married"
                />
                Married
              </label>

              <label>
                <input
                  name="marital"
                  onChange={(e) => setMaritalStatus(e.target.value)}
                  checked={maritalStatus === "Divorced"}
                  type="radio"
                  value="Divorved"
                />
                Divorced
              </label>

              <label>
                <input
                  name="marital"
                  onChange={(e) => setMaritalStatus(e.target.value)}
                  checked={maritalStatus === "Seperated"}
                  type="radio"
                  value="Seperated"
                />
                Separated
              </label>

              <label>
                <input
                  name="marital"
                  onChange={(e) => setMaritalStatus(e.target.value)}
                  checked={maritalStatus === "Others"}
                  type="radio"
                  value="Others"
                />
                Others
              </label>
            </div>

            <label>Employment Status:</label>
            <div className="radioinput-form">
              <label>
                <input
                  name="Employment"
                  type="radio"
                  onChange={(e) => setEmploymentStatus(e.target.value)}
                  checked={employmentStatus === "Employed"}
                  value="Employed"
                />
                Employed
              </label>

              <label>
                <input
                  name="Employment"
                  type="radio"
                  onChange={(e) => setEmploymentStatus(e.target.value)}
                  checked={employmentStatus === "Self Employed"}
                  value="Self Employed"
                />
                Self Employed
              </label>

              <label>
                <input
                  name="Employment"
                  type="radio"
                  onChange={(e) => setEmploymentStatus(e.target.value)}
                  checked={employmentStatus === "Unemployed"}
                  value="Unemployed"
                />
                Unemployed
              </label>
            </div>

            <label>Occupation:</label>
            <input
              type="text"
              onChange={(e) => setOccupation(e.target.value)}
              value={occupation}
            />

            <label>Company/Employer Name (for employed/Self employed):</label>
            <input
              type="text"
              onChange={(e) => setEmployerName(e.target.value)}
              value={employerName}
            />

            <label>Job Title/Designation:</label>
            <input
              type="text"
              onChange={(e) => setJobTitle(e.target.value)}
              value={jobTitle}
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

            <label className="termsandconditioncheck" htmlFor="">
              <input
                checked={isChecked}
                onChange={handleCheckState}
                type="checkbox"
                name=""
                id=""
              />
              <p>   I agree to the
              <a
                target="_blank"
                href="https://efglobaltravels.com/terms-and-conditions"
                className="termsandconditiontxt"
              >
                Terms and Conditions
              </a>
              of EF GLOBAL TRAVELS </p>
            
            </label>

            {isChecked === false ? <p className="p-warning">Please check the box before submiting this form</p> : ""}
            

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
