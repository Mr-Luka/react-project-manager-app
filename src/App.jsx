import './index.css';


import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid'; //Importing a UUID generator

import NoProjectSelected from './assets/components/NoProjectSelected.jsx';
import AddProjects from './assets/components/AddProject.jsx';
import Project from './assets/components/Project.jsx';

function App() {
  const [newProject, setNewProject] = useState(false); // state that checks if there are any new projects
  const [seeProject, setSeeProject] = useState(false); // state that will check to see if we are looking at the project info when we click on it
  const [projects, setProjects] = useState([]); // state that will store all the projects
  const [selectedProject, setSelectedProject] = useState([]); // state that will show me the selected project
  const [formData, setFormData] = useState({ // state that will store project data
    title: '',
    description: '',
    dueDate: '',
  });

  function handleInput(e){
    const {name, value} = e.target;
    setFormData(prevForm => {
      return {
        ...prevForm, 
        [name]: value}
      },
    )}
    
    function handleSubmit(e){
      e.preventDefault();
      setNewProject(false);
      setProjects(prevProject=> {
        const newProject = 
        [
          ...prevProject,
        {
          id: uuidv4(), // generate unique ID
          title: formData.title,
          description: formData.description,
          dueDate: formData.dueDate,
        }]
        return newProject;
      })
      console.log(projects);
    }

  function handleClick(){
    setNewProject(newProject => !newProject);
  }

  function openProject(projectKey){
    setNewProject(false);
    setSeeProject(true);
    const projectObject = projects[projectKey]
    setSelectedProject(projectObject)
  }

  function deleteProject(){
    const newTasksArray = projects.filter(project => project.id !== selectedProject.id);
    setProjects(newTasksArray);
    setSeeProject(false);
    setSeeProject(null);
  }

  return (
    <>
      <div className="projects-wrapper">
        <div className="add-projects">
          <h2>YOUR PROJECTS</h2>
          <button onClick={handleClick}>+ Add Project</button>
          <div className='saved-projects'>
            <ol className='ol-saved-projects'>
              {projects.map((project, projectIndex)=> 
              <li key={projectIndex} onClick={()=>openProject(projectIndex)}>{project.title}</li>)}
            </ol>
          </div>
        </div>
        {newProject ? 
          (<AddProjects 
            submitForm={handleSubmit}
            handleInput={handleInput}
            cancel={handleClick}
          />
          ) : seeProject ? (
            <Project
              title={selectedProject.title}
              description={selectedProject.description}
              date={selectedProject.dueDate}
              remove={deleteProject}
            />
          ) : (
          <NoProjectSelected 
            createProject={handleClick}
          />
        )}

      </div>
    </>
  );
}

export default App;
