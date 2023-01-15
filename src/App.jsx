import {useState} from 'react'
import CustomForm from './components/CustomForm'
import TaskList from './components/TaskList'
import EditForm from './components/EditForm'
import useLocalStorage from './hooks/useLocalStorage'

const App = () => {
const [tasks,setTasks] =  useLocalStorage('react-todo.tasks',[])
const [editedTask, setEditedTask] = useState(null);
const [previousFocusEl, setPreviousFocusEl] = useState(null);
const [isEditing,setIsEditing] = useState(false)

  const addTask = (task) => {
setTasks(prevState => [...prevState, task])
  }
  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id)
    setTasks(newTasks)
  }

  const toggleTask = (id) => {
  
    setTasks(prevState => prevState.map(task => (
      task.id === id 
      ? {...task, checkhed: !task.checked}
      : task
    )))
  }
  
 const updateTask = (task) => {
 setTasks(prevState => prevState.map(t => t.id === task.id
  ? {...t, name: task.name}
  : t
  ))
  closeEditMode()
 }

 

 const closeEditMode = () => {
 setIsEditing(false)
 previousFocusEl.focus()
 }

  const enterEditMode = (task) => {
    setEditedTask(task)
   setIsEditing(true)
   setPreviousFocusEl(document.activeElement)
 
  }
  return (
    <div className='container'>
      <header>
        <h1>My Task List</h1>
      </header>
      {isEditing && (
  <EditForm 
  editedTask={editedTask}
  updateTask={updateTask}
  closeEditMode={closeEditMode}
  />
      )}
    
      <CustomForm addTask={addTask} />
     
        
      {tasks && <TaskList tasks={tasks}
      deleteTask={deleteTask}
      toggleTask={toggleTask}
      enterEditMode={enterEditMode}
      />}
    </div>
  )
}

export default App
