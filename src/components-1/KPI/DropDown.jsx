import React, { Component } from 'react'

class DropDown extends Component {
    constructor(props){
        super(props)
        this.state={
            topic:'registrations'
        }
    }
  
    handleTopicChange = event =>{
        this.setState({
            topic:event.target.value
        })
    }
    handleFormSubmit= event => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
        console.log("${this.state.username}",this.state.username)
    }
  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>
            <label>Select KPI: </label>
            <select value={this.state.topic} onChange={this.handleTopicChange}>
                <option value="registrations">Registrations</option>
                <option value="ftds">FTDs</option>
                <option value="qps">QPs</option>
            </select>
        </div>
      
        {/* <input type="submit" value="Submit"/> */}
      </form>
    )
  }
}

export default DropDown
