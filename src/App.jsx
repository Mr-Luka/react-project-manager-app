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
            <ol className='ol-saved-projects'>
              
            </ol>
          </div>
        </div>
        <div className='project'>
          <div className='title-and-button'>
            <h1>TITLE</h1>
            <button>Delete</button>
          </div>
          <p>DATE</p>
          <p>DESCRIPTIONdsdsdsdsds jhsdjkhsdjkhsds<br/> <br/>Start with the basic</p>
          <hr></hr>
          <h2>Tasks</h2>
          <div className="tasks">
            <input></input>
            <button>Add Task</button>
          </div>
          <ol>
            <li>This project does no have any tasks yet.</li>
          </ol>
        </div>

      </div>
    </>
  );
}

export default App;
