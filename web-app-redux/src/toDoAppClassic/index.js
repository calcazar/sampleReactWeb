import React from 'react';
import './index.scss';
import SearchSection from "./todoInputSection/todoInputSection"
import TodoResults from "./todoResults/todoResults"

export default class App extends React.Component {
  constructor() {
    super();
    this.addToResults = this.addToResults.bind(this)
    this.removeResults = this.removeResults.bind(this)
    let resultsList = JSON.parse(localStorage.getItem("resultsC"))
    this.state = {
      results: resultsList || []
    }
  }

 

  saveResultsToLocalStorage(results) {
    localStorage.setItem("resultsC",results)
  }

addToResults(todoItem){
    const {results} = this.state
    const newResultSet = results.slice(0); 
    newResultSet.push(todoItem)
    this.setState({results: newResultSet})
    this.saveResultsToLocalStorage(JSON.stringify(newResultSet))
}

removeResults(index){
    const {results} = this.state
    const newResultSet = results.slice(0); 
    newResultSet.splice(index, 1)
    this.setState({results: newResultSet})
    this.saveResultsToLocalStorage(JSON.stringify(newResultSet))
}

  render(){
    return (
      <div className="app">
          <SearchSection addToResults={this.addToResults}/>
          <TodoResults results={this.state.results} removeResults={this.removeResults}/>
      </div>
    );
  }
}

