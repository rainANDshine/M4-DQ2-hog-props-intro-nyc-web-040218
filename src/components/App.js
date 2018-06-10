import React, { Component } from 'react'
import MasterHog from '../containers/MasterHog'
import Offspring from '../db.js'
import '../App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      offSpring: Offspring.offspring
    }
  }

  render() {
    return (
      <div className="App">
        <MasterHog offSpring={this.state.offSpring}/>
      </div>
    )
  }

}

export default App
