import {useState} from 'react';
export default function AddProject({cancel}){

    return (
        <>
        <div className="projects-form">
          <div className='cancel-save'>
            <button onClick={cancel}>Cancel</button>
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