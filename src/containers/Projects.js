import React, { Component } from 'react'
import ProjectItem from '../components/ProjectItem/ProjectItem.js'
import projectsData from '../data/projectsData.js'


const Projects = () => {
  const projectNodes = projectsData.map(project => {
    return <ProjectItem {...project}
    // title={title}
    // liveUrl={liveUrl}
    // repo={repo}
    // technology={technology}
    // description={description}
    // extra={extra}
    />
  });
  
  
  return (
    <div className='Projects'>
      {projectNodes}
    </div>
  )
}

export default Projects;

// export default class Projects extends Component {


//   render() {
//     return (
//       <div className='Projects'>
//         <ProjectItem />
//         <ProjectItem />
//       </div>
//     )
//   }
// }
