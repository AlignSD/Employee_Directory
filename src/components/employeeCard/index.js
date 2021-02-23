import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTable } from 'react-table'

function EmployeeCard(props) {
    return (
        <>
        <div className="container">
            <div className="card align-items-center col-sm-4">
                <p>{props.employee.name.first}</p>
                <p>{props.employee.name.last}</p>
                <p>{props.employee.email}</p>
                <p>{props.employee.phone}</p>
                <img src={props.employee.picture.thumbnail} height="75px" width="75px"></img>
            </div>
        </div>
        </>
    )
    
}
// first, last name / email / phone number / picture
export default EmployeeCard;