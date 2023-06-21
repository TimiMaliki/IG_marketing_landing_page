import { useState } from 'react'
import Button from '../components/Button'
import Tasks from '../components/Tasks'

function Header({ title }) {

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
            day: ' jun 20, 9:00',
           reminder: false,
         }

      ]
   )
   //Deleting Task

   const deleteTask = (id) => {
      setTask(tasks.filter((task) => task.id !== id))
   }

   //ToggleReminder

   const toggleReminder = (id) => {
      setTask(
         tasks.map((task) =>
         task.id === id ? {...task, reminder:!task.reminder} : task

         )
         
      )
   }

   const onClick = () => {
   
   }

   return <div className='container'>
      <header className='header'>

         <h1>{title}</h1>

         <Button color='blue' text='Hello' onClick={onClick} />
      </header>

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


