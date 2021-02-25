// import reactDom from "react-dom";
// import EC from "./components/employeeCard";
// import API from "./utlities/api";
// import React, { Component } from "react";
// import SearchBar from "./components/searchbar/index";


// const App = () => {

// }
// class App extends Component {
//   state = {
//     result: [],
//     search: "",
//     searchResult: []
//   };

//   handleInputChange = (e) => {
//       this.setState({
//       search: e.target.value
//     })
//   }

//   handleFormSubmit = (e) => {
//     e.preventDefault();
//       const filteredEmployee = this.state.result.filter((employee) => {
//         return employee.name.first.includes(this.state.search) || employee.name.last.includes(this.state.search);
//       })
//       this.setState({ searchResult: filteredEmployee})
//   }

//   componentDidMount() {
//     API.getEmployees()
//     // .then(res => console.log(res))
//     .then(res => this.setState({ result: res.data.results}))
//   };
//   render(){
//     if (this.state.result < 1) {
//       return(<div>Loading...</div>)  
//     }
//     else {
//       return(
//         <>
//         <SearchBar 
//           handleInputChange={this.handleInputChange} 
//           handleFormSubmit={this.handleFormSubmit} 
//           search={this.state.search}
//         />
      
//         {this.state.result.map((employee) => {
//           return (
//             <div className="App" key={employee.email}>
//               <EC employee={employee}/>
              
//             </div>
//           )
          
//         })
//       }
//       </>  
//       )
//   } 
//   }
// }

// export default App;


// js sort objects to sort by name

// 

import React, { useMemo, useState, useEffect } from "react";

import Table from "./components/tablecomponent/table";
import axios from "axios";

// import "./App.css";

function App() {
  // data state to store the TV Maze API data. Its initial value is an empty array
  const [data, setData] = useState([]);

  const columns = useMemo(
    () => [
      {
        // first group - TV Show
        Header: "Employees",
        // First group columns
        columns: [
          {
            Header: "Picture",
            accessor: "picture.large",
            Cell: ({ cell: { value } }) => (
              <img
                src={value}
                width={60}
              />
            )
          },
          {
            Header: "First Name",
            accessor: "name.first"
          },
          {
            Header: "Last name",
            accessor: "name.last"
          },
          {
            Header: "Email",
            accessor: "email"
          },
          {
            Header: "Phone Number",
            accessor: "phone"
          },
        ]
      }
    ],
    []
  );

  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    (async () => {
      const result = await axios("https://randomuser.me/api/?results=20");
      console.log(result);
      setData(result.data.results);
    })();
  }, []);

  return (
    <div className="App">
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;