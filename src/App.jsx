import './index.css';
import picture from './assets/no-projects.png';

import AddProjects from './assets/components/AddProject.jsx';

function App() {
  return (
    <>
      <div className="projects-wrapper">
        <div className="add-projects">
          <h2>YOUR PROJECTS</h2>
          <button>+ Add Project</button>
          <div className='saved-projects'>
            <ol className='ol-saved-projects'></ol>
          </div>
        </div>
          <div className='no-project-selected'>
            <img src={picture} alt="No projects selected" />
            <h3>No Project Selected</h3>
            <p>Select a project or get started with a new one</p>
            <button>Create new project</button>
          </div>
      </div>
    </>
  );
}

export default App;
