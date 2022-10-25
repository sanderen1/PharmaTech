import { BrowserRouter as Router, useNavigate } from "react-router-dom"

import React from 'react'

function Patients() {
  let navigate = useNavigate();

  //If no matching patient is found, allow re-direct to add a new patient
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e)
    if (window.confirm("Patient not found. Would you like to add a new patient?")) {
      navigate("/PharmaTech/addPatient")
    }
  }


  return (
    
    <div class="container">
    <br></br>
    <h1>Find/Add Patient</h1>
    <p><i>Note for class: If you search a patient and no match is found, you'll be given the option to add that patient</i></p>

    <form class="row g-3" onSubmit={submitHandler}>

    <div class="col-md-4">
    <label for="firstName" class="form-label">First Name</label>
    <input type="text" class="form-control" id="firstName" required />
  </div>

  <div class="col-md-4">
    <label for="middleName" class="form-label">Middle Name</label>
    <input type="text" class="form-control" id="middleName"  />
  </div>

  <div class="col-md-4">
    <label for="lastName" class="form-label">Last Name</label>
    <input type="text" class="form-control" id="lastName" required />
  </div>

  <div class="col-md-4">
    <label for="dob" class="form-label">Date of Birth</label>
    <input type="date" class="form-control" id="dob" required />
  </div>

  <div class="col-md-4">
    <label for="patientID" class="form-label">Patient ID</label>
    <input type="text" class="form-control" id="patientID" />
  </div>

  <div class="col-md-4">
    <label for="status" class="form-label">Status</label>
    <select id="status" class="form-select" >
      <option disabled selected>...</option>
      <option>Alive</option>
      <option>Deceased</option>
      <option>Unknown</option>
    </select>
  </div>

  <div class="col-12">
    <label for="address" class="form-label">Address</label>
    <input type="text" class="form-control" id="address" placeholder="1234 Main St" />
  </div>

  <div class="col-md-6">
    <label for="city" class="form-label">City</label>
    <input type="text" class="form-control" id="city" />
  </div>

  <div class="col-md-4">
    <label for="state" class="form-label">State</label>
    <select id="state" class="form-select" >
      <option disabled defaultValue>...</option>
      <option>AL</option>
      <option>AK</option>
      <option>AZ</option>
      <option>AR</option>
      <option>AS</option>
      <option>CA</option>
      <option>CO</option>
      <option>CT</option>
      <option>DE</option>
      <option>DC</option>
      <option>FL</option>
      <option>GA</option>
      <option>GU</option>
      <option>HI</option>
      <option>ID</option>
      <option>IL</option>
      <option>IN</option>
      <option>IA</option>
      <option>KS</option>

      <option>KY</option>
      <option>LA</option>
      <option>ME</option>
      <option>MD</option>
      <option>MA</option>
      <option>MI</option>
      <option>MN</option>
      <option>MS</option>
      <option>MO</option>
      <option>MT</option>
      <option>NE</option>
      <option>NV</option>
      <option>NH</option>
      <option>NJ</option>
      <option>NM</option>
      <option>NY</option>
      <option>NC</option>
      <option>ND</option>
      <option>CM</option>

      <option>OH</option>
      <option>OK</option>
      <option>OR</option>
      <option>PA</option>
      <option>PR</option>
      <option>RI</option>
      <option>SC</option>
      <option>SD</option>
      <option>TN</option>
      <option>TX</option>
      <option>TT</option>
      <option>UT</option>
      <option>VT</option>
      <option>VA</option>
      <option>VI</option>
      <option>WA</option>
      <option>WV</option>
      <option>WI</option>
      <option>WY</option>
    </select>
  </div>

  <div class="col-md-2">
    <label for="zipCode" class="form-label">Zip</label>
    <input type="text" class="form-control" id="zipCode" />
  </div>

  <div class="col-12">
    <button type="submit" class="btn btn-primary">Search</button>
  </div>
</form>

</div>

  )
}

export default Patients