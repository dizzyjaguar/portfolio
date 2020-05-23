import React, { Component } from 'react'
import ProjectItem from '../components/ProjectItem/ProjectItem.js'

export default class Projects extends Component {
  render() {
    return (
      <div className='Projects'>
        <ProjectItem />
        <ProjectItem />
      </div>
    )
  }
}
