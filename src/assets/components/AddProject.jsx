export default function AddProject(){

    return (
        <>
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
        </>
    )
}