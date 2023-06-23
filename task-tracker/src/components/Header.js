import Button from '../components/Button'


function Header({ title,onAdd,showAdd})
 {
   
   return <div >
      <header className='header'>
         <h1>{title}</h1>
         <Button color={showAdd ? 'red' : 'blue'} text={showAdd ? 'Close' : 'Add'}       
          onClick={onAdd}/> 
      </header>

     



   </div>
}

Header.defaultProps = {
   title: "Task Tracker",
}

export default Header


