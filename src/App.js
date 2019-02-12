import React, { Component } from 'react';
import './App.css';
import Random from './Components/random.js'
import {Row, Col} from 'reactstrap';

class App extends Component {

  state = {
    randomnum: []
  };


  randomClick = () => {
      let myArray = [];
        while (myArray.length < 5) {
            let randomNumber = Math.floor(Math.random() * (37 - 5) + 5);
            if (myArray.indexOf(randomNumber) === -1) {
                myArray.push(randomNumber);
            }
        }

      let newState = {...this.state};
        newState.randomnum = myArray.sort(function (a, b) {
            return (a - b);
        });

      this.setState(newState);
    };


  render() {
    return (
      <div className="App">
        <div>
          <button className="mt-5 mb-5 btn btn-warning" onClick={this.randomClick}>Start</button>
          <Row>
            <Col>
              <Random number={this.state.randomnum[0]}/>
            </Col>
            <Col>
              <Random number={this.state.randomnum[1]}/>
            </Col>
            <Col>
              <Random number={this.state.randomnum[2]}/>
            </Col>
            <Col>
              <Random number={this.state.randomnum[3]}/>
            </Col>
            <Col>
              <Random number={this.state.randomnum[4]}/>
            </Col>
          </Row>
        </div>
      </div>
    );
  };
}

export default App;
