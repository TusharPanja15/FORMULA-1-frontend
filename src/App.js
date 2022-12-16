import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {

  // Constructor 
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false
    };
  }

  // ComponentDidMount is used to
  // execute the code 
  componentDidMount() {
    fetch(
      "http://localhost:8888/events")
      .then((res) => res.json())
      .then((json) => {
        // console.log(json.data)
        this.setState({
          items: json.data,
          DataisLoaded: true
        });
      })
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return <div>
      <h1> Pleses wait some time.... </h1> </div>;



    return (
      <div className="App">
        <h1> FORMULA 1 </h1>
        <br></br>
        <br></br>
        {items.map(element => (
          <div>
            <h3>{element.eventName}</h3>
            <p>{element.eventDate}</p>
            <p>{element.eventLocation}</p>
            <br></br>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
