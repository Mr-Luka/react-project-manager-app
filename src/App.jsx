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

      </div>
    </>
  );
}

export default App;
