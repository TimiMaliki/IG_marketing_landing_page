import Button from '../components/Button'

 function Header({title}){
    const onClick = () => {
        console.log('timi')
     }
     

   return <div className='container'> 
   <header className='header'>
   <h1>{title}</h1>

   <Button  color='blue' text='Hello' onClick={onClick}/>
   </header>
   </div>
 }

 Header.defaultProps ={
    title:"Task Tracker",
 }

 export default Header