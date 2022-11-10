import { useNavigate } from "react-router-dom"
import { React, useState, useEffect } from 'react'


function EditPatient() {
  let navigate = useNavigate(); //This allows us to link user to another page in the pop-up alert window
  
  const [patient, setPatient] = useState();
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [DOB, setDOB] = useState('');
  const [sex, setSex] = useState('');
  const [status, setStatus] = useState('');
  const [race, setRace] = useState('');
  const [ethnicity, setEthnicity] = useState('');


  //capture patient to edit's patientID from the URL
  const patientID = window.location.href.split('editPatient/')[1]; 

  

  //fetch Patient Data upon page mount
  useEffect(() => {
    fetch(`http://flip3.engr.oregonstate.edu:44265/FindPatient/${patientID}`)
    .then(response => response.json())
    .then(data => {
      setPatient(data[0])

      setTimeout(() => {
        console.log("This is just a time-waster function");
      }, "5000")

      setFirstName(patient.FirstName)
      setMiddleName(patient.MiddleName)
      setLastName(patient.LastName)
      setDOB(patient.DOB.slice(0,4)+'-'+patient.DOB.slice(5,7)+'-'+patient.DOB.slice(8,10))
      setSex(patient.Sex)
      setStatus(patient.ActiveStatus)
      setRace(patient.Race)
      setEthnicity(patient.Ethnicity)
    })
    console.log(patient)
  }, [patientID]) //THERE IS SOME KIND OF PROBLEM HERE WHERE THE FETCH ISN'T RESOLVING BEFORE THE REST OF THE PAGE LOADS SO IT ERRORS OUT MOST TIMES?

  

  //OnClick handler to submit changes
  const modifyHandler = (e) => {
    e.preventDefault();
    console.log("MODIFY THIS PATIENT"+patientID)
    fetch('http://flip3.engr.oregonstate.edu:44265/EditPatient/'+patientID, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          FirstName: firstName,
          MiddleName: middleName,
          LastName: lastName,
          DOB: DOB,
          Sex: sex,
          ActiveStatus: status,
          Race: race,
          Ethnicity: ethnicity,
        })
      })
      .then(res => res.json())
      .then(json => console.log(json));

      window.alert("You will now be routed back to the main page")
      navigate("/PharmaTech/ViewPatient")
    }
  
  
  return (
    <div className="container">
    <ul className="nav nav-tabs">
        <li className="nav-link" onClick={event => navigate("/PharmaTech/ViewPatient")}>
            View Patients
        </li>

        <li className="nav-link" onClick={event => navigate("/PharmaTech/searchPatient")}>
            Search Patients
        </li>

        <li className="nav-link" onClick={event => navigate("/PharmaTech/addPatient")}>
            Add Patient
        </li>
    </ul>

      <h1>Edit Patient</h1>
      <br></br>


    <form className="row g-3" onSubmit={modifyHandler}>

    <div className="col-md-3">
      <label for="patientID" className="form-label">PatientID <b>(required)</b></label>
      <input value={patientID} type="text" className="form-control" id="patientID" disabled/>
    </div>

    <div className="col-md-3">
      <label for="firstName" className="form-label">First Name <b>(required)</b></label>
      <input value={firstName} type="text" className="form-control" id="firstName" required onChange={event => setFirstName(event.target.value)}/>
    </div>

    <div className="col-md-3">
      <label for="middleName" className="form-label">Middle Name</label>
      <input value={middleName} type="text" className="form-control" id="middleName"  onChange={event => setMiddleName(event.target.value)}/>
    </div>

    <div className="col-md-3">
      <label for="lastName" className="form-label">Last Name <b>(required)</b></label>
      <input value={lastName} type="text" className="form-control" id="lastName" required onChange={event => setLastName(event.target.value)}/>
    </div>

    <div className="col-md-4">
      <label for="dob" className="form-label">Date of Birth <b>(required)</b></label>
      {/* <input value={patient.DOB.slice(0, 10)} type="date" className="form-control" id="dob" required onChange={event => setDOB(event.target.value)}/> */}
      <input value={DOB} type="date" className="form-control" id="dob" required onChange={event => setDOB(event.target.value)}/>
    </div>

    <div className="col-md-4">
      <label for="sex" className="form-label">Sex</label>
      <select id="sex" className="form-select" onChange={event => setSex(event.target.value)}>
        <option selected disabled>{sex}</option>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
        <option>Unknown</option>
      </select>
    </div>

    <div className="col-md-4">
      <label for="status" className="form-label">Status <b>(required)</b></label>
      <select id="status" className="form-select" required onChange={event => setStatus(event.target.value)} >
        <option selected disabled>{status}</option>
        <option>Alive</option>
        <option>Deceased</option>
        <option>Unknown</option>
      </select>
    </div>


    <div className="col-md-3">
      <label for="race" className="form-label">Race</label>
      <select id="race" className="form-select" onChange={event => setRace(event.target.value)} >
        <option selected disabled>{race}</option>
        <option>American Indian or Alaska Native</option>
        <option>Asian</option>
        <option>Black or African American</option>
        <option>Native Hawaiian or Other Pacific Islander</option>
        <option>White</option>
        <option>Other Race</option>
        <option>Unknown</option>
      </select>
    </div>

    <div className="col-md-3">
      <label for="ethnicity" className="form-label">Ethnicity</label>
      <select id="ethnicity" className="form-select" onChange={event => setEthnicity(event.target.value)} >
        <option selected disabled>{ethnicity}</option>
        <option>Hispanic or Latino</option>
        <option>Not Hispanic or Latino</option>
        <option>Unknown</option>
      </select>
    </div>

    <div className="col-12">
      <button type="submit" className="btn btn-primary">Submit</button>
    </div>

    </form>
  </div>
  )
}

export default EditPatient








