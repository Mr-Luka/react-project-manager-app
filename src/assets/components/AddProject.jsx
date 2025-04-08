import {useState} from 'react';

export default function AddProject({cancel}){
  const [form, setForm] = useState({
    title: '',
    description: '',
    dueDate: '',
  });
  const [save, setSave] = useState(false);

  function handleSave(){
    setSave(save=> !save);
  }

  function handleInput(inputField, input){
    setForm(prevForm => {
      return {
        ...prevForm, 
        [inputField]: input}
    },
    console.log(inputField, input))
  }



    return (
        <>
        <div className="projects-form">
          <form>
          <div className='cancel-save'>
            <button onClick={cancel}>Cancel</button>
            <button onClick={handleSave}>Save</button>
          </div>
            <label>TITLE</label>
            <input 
              id='title'
              name="title"
              type='text' 
              onChange={(e)=> handleInput(form.title, e.target.value)}></input>
            <label>DESCRIPTION</label>
            <textarea 
              id='description'
              name="description"
              onChange={(e)=> handleInput(form.description, e.target.value)}></textarea>
            <label>DUE DATE</label>
            <input
              id='dueDate'
              name="dueDate"
              type='date' 
              onChange={(e)=> handleInput(form.dueDate, e.target.value)}></input>
          </form>
        </div>
        </>
    )
}