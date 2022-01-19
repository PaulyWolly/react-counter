import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/CounterApp/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//import CounterApp from './Components/CounterApp/CounterApp'
import CountersClass from './Components/CounterApp/CountersClass'

class App extends Component {

  state = {
    counters: [
      { counter: 1, id: 1, value: 0 },
      { counter: 2, id: 2, value: 1 },
      { counter: 3, id: 3, value: 2 },
      { counter: 4, id: 4, value: 3 }
    ]
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters })
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({ counters });
  }

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value--;
    this.setState({ counters });
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters })
  };

  render() {

    return (
      <Router>

        <div className="App">
          <Navbar totalCounters={this.state.counters.filter(c=> c.value > 0).length} />
          <main className='container'>
            <Routes>
              <Route exact path="/" element={
                <CountersClass
                  counters={this.state.counters}
                  onReset={this.handleReset}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                  onDelete={this.handleDelete}
                />}>
              </Route>
            </Routes>
          </main>
        </div>

      </Router>
    );
  }
}

export default App;