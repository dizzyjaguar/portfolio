import React from 'react';
import '../App/App.css';


const ProjectItem = ({ title, liveUrl, repo, technology, description, extra }) => {
  return (
    <div className='Project-Item'>
      <h3 className='Title'> {title} </h3>
      <a className='LiveUrl' href={liveUrl}>Live Url</a> <n/>
      <a className='Repo' href={repo}>Repository</a>
      <p className='Technology'> {technology} </p>
      <p className='Description'> {description} </p>
      <span className='Extra'> {extra} </span>
    </div>
  );
};

export default ProjectItem;
