import React, { Component } from 'react'

export default class ProjectItem extends Component {
  render() {
    return (
      <div className='Project-Item'>
        <h3> This is a Project</h3>
        <a href='/'>This is the Link to project</a>
        <p> This about the project </p>
        <ul>
          <li>technologies</li>
          <li> used </li>
          <li> in project </li>
        </ul>
      </div>
    )
  }
}
