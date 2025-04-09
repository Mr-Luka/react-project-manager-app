
import { convertDate } from '../utils/convertDate.js';

export default function Project({title, date, description, remove}){

  const formattedDate = convertDate(date);


    return (
        <div className='project'>
          <div className='title-and-button'>
            <h1>{title}</h1>
            <button onClick={remove}>Delete</button>
          </div>
          <p>{formattedDate}</p>
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