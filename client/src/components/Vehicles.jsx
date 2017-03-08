import React from 'react'

class Vehicles extends React.Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      vehicles: [],
      message: ""
    }
  }

  handleClick(event) {
    this.setState({message: "Loading..."})
    const url = "http://swapi.co/api/vehicles/"
    const request = new XMLHttpRequest()
    request.open("GET", url)
    request.onload = () => {
      if (request.status !== 200) return
      const data = JSON.parse(request.responseText)
      this.setState({vehicles: data.results, message: ""})
    };
    request.send();
  }


  render(){
    return(
      <div>
        
        <h2>I really hate React & some Star Wars vehicles</h2>
        <button onClick={this.handleClick} >Load vehicles</button>
        {this.state.message}
        {this.state.vehicles.map(function(vehicle, index) {
          return (
            <div key={index}>
              <h3>{index+1}. {vehicle.model}</h3>
              <p>Manufacturer: {vehicle.manufacturer}</p>
              <p>Class: {vehicle.vehicle_class}</p>
              <p>Max speed: {vehicle.max_atmosphering_speed}</p>
              <p>Cost: {vehicle.cost_in_credits}</p>
            </div>
          )
        })}
        
      </div>
    );
  }

}

export default Vehicles