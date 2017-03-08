import React from 'react'

class Planets extends React.Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      planets: [],
      message: ""
    }
  }

  handleClick(event) {
    this.setState({message: "Loading..."})
    const url = "http://swapi.co/api/planets/"
    const request = new XMLHttpRequest()
    request.open("GET", url)
    request.onload = () => {
      if (request.status !== 200) return
      const data = JSON.parse(request.responseText)
      this.setState({planets: data.results, message: ""})
    };
    request.send();
  }


  render(){
    return(
      <div>
        
        <h2>I really hate React & some Star Wars planets</h2>
        <button onClick={this.handleClick} >Load planets</button>
        {this.state.message}
        {this.state.planets.map(function(planet, index) {
          return (
            <div key={index}>
              <h3>{index+1}. {planet.name}</h3>
              <p>Population: {planet.population}</p>
              <p>Diameter: {planet.diameter}</p>
              <p>Climate: {planet.climate}</p>
              <p>Terrain: {planet.terrain}</p>
            </div>
          )
        })}
        
      </div>
    );
  }

}

export default Planets