
function Button({color, text , onClick}){
  return <div>
    <button  onClick={onClick} className='btn' style={{backgroundColor:color}}>{text}</button>
  </div>
}

Button.default = {
  color:'steelblue'
}
export default Button
