import { React, useState } from 'react'
import { useNavigate } from "react-router-dom"

function AddEvent() {
  let navigate = useNavigate(); //This allows us to link user to another page in the pop-up alert window

  const submissionDate = "HAVE TO PUT CURRENT DATE IN HERE"
  let newDate = new Date()
  let date = String(newDate.getDate());
  let month = String(newDate.getMonth() + 1);
  let year = String(newDate.getFullYear());
  let currentDate = month+"-"+date+"-"+year

  return (
    <div className="container">
      <ul className="nav nav-tabs">
          <li className="nav-link" onClick={event => navigate("/PharmaTech/viewEvent")}>
              View Events
          </li>

          <li className="nav-link" onClick={event => navigate("/PharmaTech/searchEvent")}>
              Search Events
          </li>

          <li className="nav-link" onClick={event => navigate("/PharmaTech/addEvent")}>
              Add Event
          </li>
      </ul>


    <h1>Add A New Event</h1>

    <form className="row g-3">

        <div className="col-md-4">
          <label for="status" className="form-label">Patient ID</label>
          <select id="status" className="form-select" required >
            <option disabled selected>Select</option>
            <option>1 - Jennie Nichols</option>
            <option>2 - Max Tucker</option>
            <option>3 - Calvin James</option>
          </select>
        </div>

        <div className="col-md-4">
          <label for="status" className="form-label">Event Type</label>
          <select id="status" className="form-select" required >
          <option disabled selected>Select</option>
          <option>Administration</option>
          <option>Historical</option>
          <option>Refusal</option>
          </select>
        </div>

        <div className="col-md-4">
          <label for="eventDate" className="form-label">Event Date</label>
          <input type="date" className="form-control" id="eventDate" required />
      </div>

        <div className="col-md-4">
        <label for="submissionDate" className="form-label">Submission Date</label>
        <input type="text" className="form-control" id="submissionDate" placeholder={currentDate} disabled />
        </div>

        <div className="col-md-4">
        <label for="productID" className="form-label">Product ID</label>
        <select id="productID" className="form-select" required>
          <option disabled selected>Select</option>
          <option>1 - Tdap</option>
          <option>2 - Influenza</option>
          <option>3 - Zoster</option>
          <option>4 - Pneumococcal</option>
        </select>
        </div>

        <div className="col-md-4">
        <label for="administrationSite" className="form-label">Administration Site</label>
        <select id="administrationSite" className="form-select" >
          <option disabled selected>Select</option>
          <option>Right Thigh</option>
          <option>Left Thigh</option>
          <option>Right Arm</option>
          <option>Left Arm</option>
          <option>Right Naris</option>
          <option>Left Naris</option>
          <option>Both Nares</option>
          <option>Unknown</option>
        </select>
        </div>
        
        <div className="col-md-4">
        <label for="administrationRoute" className="form-label">Administration Route</label>
        <select id="administrationRoute" className="form-select" >
          <option disabled selected>Select</option>
          <option>Intramuscular</option>
          <option>Subcutanous</option>
          <option>Oral</option>
          <option>Intradermal</option>
          <option>Intranasal</option>
          <option>Intravenous</option>
          <option>Percutaneous</option>
          <option>IV Piggyback</option>
          <option>Unknown</option>
        </select>
        </div>

        <div className="col-md-4">
        <label for="providerID" className="form-label">Provider ID</label>
        <select id="providerID" className="form-select" >
          <option disabled selected>Select</option>
          <option>1 - Rebecca Mitchell</option>
          <option>2 - Timothy Vanleer</option>
          <option>3 - Edward Lemus</option>
          <option>Unknown</option>
        </select>
        </div>

        <div className="col-md-4">
        <label for="facilityID" className="form-label">Facility ID</label>
        <select id="facilityID" className="form-select" >
          <option disabled selected>Select</option>
          <option>1 - Spectrum Health</option>
          <option>2 - Walgreens</option>
          <option>3 - Wellnow</option>
          <option>4 - Oak Street Health</option>
          <option>Unknown</option>
        </select>
        </div>
{/* 
        <div className="col-6">
        <label for="facilityName" className="form-label">Facility Name</label>
        <input type="text" className="form-control" id="facilityName" />
        </div>

        <div className="col-3">
        <label for="facilityCity" className="form-label">Facility City</label>
        <input type="text" className="form-control" id="facilityCity" />
        </div>


        <div className="col-md-3">
        <label for="state" className="form-label">Facility State</label>
        <select id="state" className="form-select" >
          <option disabled selected>Select</option>
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
        </div> */}

        <div className="col-md-12">
        <label for="notes" className="form-label">Notes</label>
        <textarea type="text" className="form-control" id="notes" rows="3"/>
        </div>

        <div className="col-12">
        <button type="submit" className="btn btn-primary">Add</button>
        </div>
        </form>

    <br/>
    <br/>
    <br/>

</div>
  )
}

export default AddEvent