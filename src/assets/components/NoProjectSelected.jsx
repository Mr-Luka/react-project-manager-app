import {useState} from 'react';
import picture from '../no-projects.png';

export default function NoProjectSelected({createProject}){

    return (
        <div className='no-project-selected'>
            <img src={picture} alt="No projects selected" />
            <h3>No Project Selected</h3>
            <p>Select a project or get started with a new one</p>
            <button onClick={createProject}>Create new project</button>
        </div>
    )
}