import React from 'react';
import Home from './components/Home.js'
import Navigation from './components/Navigation.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = ""
  }

  componentDidMount() {
    fetch("https://api.giphy.com/v1/gifs/trending?api_key=OhxK7loTLfGaFw7GjrX6MIVtHPevhRuX")
      .then(response => response.json())
      .then(data => {
        let gifsArray = []
        data.data.forEach(gif => {
          gifsArray.push({
            username: gif.username,
            url: gif.images.original.url
          })
          
        })
        this.setState({
          gifsArray
        })
      })
      .catch(e => { console.log(e) })
  }
  render() {
    
    if (!this.state.gifsArray) {
      <h3> cargando… </h3>
    } else {
      return (
        <div>
          <Navigation />
          <Home gifs={this.state.gifsArray}/>
        </div>
      )
    }
   

  }

}

export default App;
