import './index.css';


import {useState} from 'react';

import NoProjectSelected from './assets/components/NoProjectSelected.jsx';
import AddProjects from './assets/components/AddProject.jsx';
import Project from './assets/components/Project.jsx';

function App() {
  const [newProject, setNewProject] = useState(false);
  const [seeProject, setSeeProject] = useState(false);
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
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
        const projectData = 
        [
          ...prevProject,
        {
          title: formData.title,
          description: formData.description,
          dueDate: formData.dueDate,
        }]
        return projectData;
      })
      console.log(projects);
    }

  function handleClick(){
    setNewProject(newProject => !newProject);
  }

  function openProject(){
    setNewProject(false);
    setSeeProject(true);
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
              <li key={projectIndex} onClick={openProject}>{project.title}</li>)}
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
            <Project />
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
