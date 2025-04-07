import './index.css';


import {useState} from 'react';

import NoProjectSelected from './assets/components/NoProjectSelected.jsx';
import AddProjects from './assets/components/AddProject.jsx';

function App() {
  const [newProject, setNewProject] = useState(false);

  function handleClick(){
    setNewProject(newProject => !newProject);
  }

  return (
    <>
      <div className="projects-wrapper">
        <div className="add-projects">
          <h2>YOUR PROJECTS</h2>
          <button>+ Add Project</button>
          <div className='saved-projects'>
            <ol className='ol-saved-projects'>
            </ol>
          </div>
        </div>
        {newProject ? <AddProjects /> : <NoProjectSelected createProject={handleClick}/>}
      </div>
    </>
  );
}

export default App;
