import {useState} from 'react'

import { PlusIcon } from '@heroicons/react/24/solid'


const CustomForm = ({addTask}) => {
const [task,setTask] = useState("")
const handleFormSubmit = (e) => {
  e.preventDefault()
  addTask({
    name: task,
    id: Date.now(),
    checked: false
  })
  setTask("")
}

  return (
    <form 
    className='todo'
    onSubmit={handleFormSubmit}
    >
      <div className='wrapper'>
      <input type="text"
      className='input'
      id='task'
      value={task}
      onInput={(e) => setTask(e.target.value)}
      required
      maxLength={60}
      autoFocus
      placeholder="Enter Task"
      />
      <label htmlFor="task"
      className='label'
      >Enter Task</label>
      
      </div>
      <button className='btn'
      type='submit'
      aria-label='Add Task'
      >  <PlusIcon />
      </button>
    </form>
  )
}

export default CustomForm
