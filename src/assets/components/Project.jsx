export default function Project({title, date, description}){

    return (
        <div className='project'>
          <div className='title-and-button'>
            <h1>{title}</h1>
            <button>Delete</button>
          </div>
          <p>{date}</p>
          <p>{description}</p>
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
    )
}