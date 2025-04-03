import './index.css'

function App() {
  return (
    <>
      <div className="projects-wrapper">
        <div className="add-projects">
          <h2>YOUR PROJECTS</h2>
          <button>+ Add Project</button>
        </div>
        <div className="projects-form">
          <div className='cancel-save'>
            <button>Cancel</button>
            <button>Save</button>
          </div>
          <form>
            <label>TITLE</label>
            <input type='text'></input>
            <label>DESCRIPTION</label>
            <textarea></textarea>
            <label>DUE DATE</label>
            <input type='date'></input>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
