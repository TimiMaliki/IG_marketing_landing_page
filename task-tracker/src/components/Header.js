import { useState } from 'react'
import Button from '../components/Button'
import Tasks from '../components/Tasks'
import AddTask from '../components/AddTask'

// onAdd 
// called the prop onAdd here
function Header({ title})
 {
   // const [showAddTask, setShowAddTask] = useState(false)
   // the add button function setShowAddtask wasnt decleared
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


   return <div className='container'>
   
      {/* {showAddTask && <AddTask onAdd={addTask} />} */}

      <header className='header'>
         <h1>{title}</h1>
         <Button color='blue' text='ADD' /> 
      </header>
{/*       
          onClick={onAdd} 
         the button onClick function */}
         
      {tasks.length > 0 ? <Tasks
         task={tasks}
         onDelete={deleteTask}
         onToggle={toggleReminder} /> : "no task to show"}



   </div>
}

Header.defaultProps = {
   title: "Task Tracker",
}

export default Header


