import React, { Component } from 'react'
import Header from './Header.js'
import About from './About.js'
import Projects from './Projects.js'
import Footer from './Footer.js'
import './App.css';


export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header> This it the Header</Header>
        <About>This is about me</About>
        <Projects>This is my projects</Projects>
        <Footer>This is the footer</Footer>
        
      </div>
    )
  }
}
