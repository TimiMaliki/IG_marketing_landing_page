import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'




function App() {
  const [showAddTask,setshowAddTask] = useState(false)
  const [tasks, setTask] = useState(
    [
       {
          id: 1,
          text: 'Going to code at IT plaza',
          day: ' jun 20, 9:00am',
          reminder: true,
       },

       {
          id: 2,
          text: 'Going to gym',
          day: ' jun 20, 5:30pm',
          reminder: true,
       },

       {
          id: 3,
          text: 'Going to code at home 9:30pm',
          day: ' jun 20, 9:00pm',
          reminder: false,
       }

    ]
 )
  //Add Tasks

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newAddedTask = { id, ...task }
    setTask([...tasks, newAddedTask])
 }
 //Deleting Task

 const deleteTask = (id) => {
    console.log({ id });
    setTask(tasks.filter((task) => task.id !== id))

 }

 //ToggleReminder

 const toggleReminder = (id) => {
    setTask(
       tasks.map((task) =>
          task.id === id ? { ...task, reminder: !task.reminder } : task

       )

    )
 }
 
  return (
    <div className='container'>

      <Header onAdd={() => setshowAddTask(!showAddTask)}showAdd={showAddTask}/>
      {showAddTask &&<AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks
         task={tasks}
         onDelete={deleteTask}
         onToggle={toggleReminder} /> : "no task to show"}

    </div>
  );
}

export default App;
