import React from 'react';
import Item from "./item";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
    };
  }
  
  changeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  render() {
    const numbers = [12, 34, 45, 67, 7];
    return (
      <div>
        <h1>{this.props.city}</h1>
        <input type="text" value={this.state.name} onChange={this.changeName} />
        <Item itemData={this.state.name} myNumbers={numbers} />
      </div>
    );
  }
}


export default App;
