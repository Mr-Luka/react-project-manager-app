import {useState} from 'react';
import { convertDate } from '../utils/convertDate.js';

export default function Project({title, date, description, remove}){
  const [newTask, setNewTask] = useState('');
  const [newTasks, setNewTasks] = useState([]);
  const [deletingTask, setDeletingTask] = useState([]);

  const formattedDate = convertDate(date);

  function handleInput(e){
    setNewTask(e.target.value);
  }

  function handleSubmit(e){
  e.preventDefault();
  if(newTask.trim() !== ''){
    setNewTasks(prevTask=> [...prevTask, newTask]); 
    setNewTask('');
  }
}

function clearTask(taskIndex){
  const taskObject = newTasks[taskIndex];
  const filteredTasks = newTasks.filter(project => project !== taskObject)
  setNewTasks(filteredTasks);
}

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
          <form onSubmit={handleSubmit}>
            <div className="tasks">
            <input onChange={handleInput} value={newTask}></input>
            <button type='submit'>Add Task</button>
          </div>
          <ol className={`tasks-ol ${newTasks.length > 0 ? 'active-tasks' : ''}`}>
            {newTasks.length > 0 ? (newTasks.map((task, taskIndex) => (
      <li key={taskIndex}><p>{task}</p><button onClick={()=> clearTask(taskIndex)}>Clear</button></li>
    ))) : <li>This project does no have any tasks yet.</li>}
          </ol>
          </form>
        </div>
    )
}