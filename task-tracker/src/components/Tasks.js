 import Task from '../components/Task'

const Tasks = ({task , OnDelete}) => {
 
  return (
    <>
      {task.map((task) => (
      <Task key={task.id} task={task}  OnDelete={OnDelete}/>) 
      )}
    </>
  )
}

export default Tasks

