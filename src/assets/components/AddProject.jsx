import {useState} from 'react';

export default function AddProject({cancel}){
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
      console.log(formData);
    }


    return (
        <>
        <div className="projects-form">
          <form onSubmit={handleSubmit}>
          <div className='cancel-save' >
            <button onClick={cancel}>Cancel</button>
            <button type='submit'>Save</button>
          </div>
            <label>TITLE</label>
            <input 
              id='title'
              name="title"
              type='text' 
              onChange={handleInput}></input>
            <label>DESCRIPTION</label>
            <textarea 
              id='description'
              name="description"
              onChange={handleInput}></textarea>
            <label>DUE DATE</label>
            <input
              id='dueDate'
              name="dueDate"
              type='date' 
              onChange={handleInput}></input>
          </form>
        </div>
        </>
    )
}