// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Routes>
          <Route path='/'/>
          <Route path='/about'/>
          <Route path='/contact'/>
          <Route exact path='/general' element={<News key="general" pageSize={6} categories="general"/>}/>
          <Route exact path='/business' element={<News key="business" pageSize={6} categories="business"/>}/>
          <Route exact path='/entertainment' element={<News key="entertainment" pageSize={6} categories="entertainment"/>}/>
          <Route exact path='/health' element={<News key="health" pageSize={6} categories="health"/>}/>
          <Route exact path='/science' element={<News key="science" pageSize={6} categories="science"/>}/>
          <Route exact path='/sports' element={<News key="sports" pageSize={6} categories="sports"/>}/>
          <Route exact path='/technology' element={<News key="technology" pageSize={6} categories="technology"/>}/>
        </Routes>
        </Router>
      </div>
    )
  }
}

