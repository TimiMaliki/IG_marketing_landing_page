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
            remainder: true,
         },

         {
            id: 2,
            text: 'Going to gym',
            day: ' jun 20, 5:30pm',
            remainder: true,
         },

         {
            id: 3,
            text: 'Going to code at home 9:30pm',
            day: ' jun 20, 9:00',
            remainder: false,
         }

      ]
   )
   //Deleting Task

   const deleteTask = (id) => {
     setTask(tasks.filter((task) => task.id !==id))
   }


   const onClick = () => {

   }

   return <div className='container'>
      <header className='header'>

         <h1>{title}</h1>

         <Button color='blue' text='Hello' onClick={onClick} />
      </header>
      <Tasks task={tasks} onDelete={deleteTask} />
   </div>
}

Header.defaultProps = {
   title: "Task Tracker",
}

export default Header