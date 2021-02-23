import reactDom from "react-dom";
import EC from "./components/employeeCard";
import API from "./utlities/api";
import React, { Component } from "react";
import SearchBar from "./components/searchbar/index";

class App extends Component {
  state = {
    result: [],
    search: "",
    searchResult: []
  };

  handleInputChange = (e) => {
      this.setState({
      search: e.target.value
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
      const filteredEmployee = this.state.result.filter((employee) => {
        return employee.name.first.includes(this.state.search) || employee.name.last.includes(this.state.search);
      })
      this.setState({ searchResult: filteredEmployee})
  }

  componentDidMount() {
    API.getEmployees()
    // .then(res => console.log(res))
    .then(res => this.setState({ result: res.data.results}))
  };
  render(){
    if (this.state.result < 1) {
      return(<div>Loading...</div>)  
    }
    else {
      return(
        <>
        <SearchBar 
          handleInputChange={this.handleInputChange} 
          handleFormSubmit={this.handleFormSubmit} 
          search={this.state.search}
        />
      
        {this.state.result.map((employee) => {
          return (
            <div className="App" key={employee.email}>
              <EC employee={employee}/>
              
            </div>
          )
          
        })
      }
      </>  
      )
  } 
  }
}

export default App;


// js sort objects to sort by name

// 