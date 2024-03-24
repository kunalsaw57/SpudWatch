import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import Prediction from './Components/Prediction';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import NotFound from './Components/NotFound';

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar/>
          <Routes>
            <Route exact path="/" index element={<Home/>} />
            <Route exact path="/prediction" element={<Prediction/>} />
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/*" element={<NotFound/>} />
          </Routes >
        </Router>
      </>
    )
  }
}
