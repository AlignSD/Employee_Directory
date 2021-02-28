import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTable } from 'react-table'


function EmployeeCard(props) {
    return (
        <>
        <div className="container">
            <div className="col">
            <tr>
               <td>{props.employee.name.first} </td>
               <td>{props.employee.name.last} </td>
               <td>{props.employee.email} </td>
               <td>{props.employee.phone} </td>
               <td>{props.employee.phone} </td>
               <img src={props.employee.picture.large} height="75px" width="75px" alt="Employee"></img>
            </tr>
                {/* <p>{props.employee.name.first}</p>
                <p>{props.employee.name.last}</p>
                <p>{props.employee.email}</p>
                <p>{props.employee.phone}</p>
                <img src={props.employee.picture.large} height="75px" width="75px" alt="Employee"></img> */}
            </div>
        </div>
        </>
    )
    
}
// first, last name / email / phone number / picture
export default EmployeeCard;