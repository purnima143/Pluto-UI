import React from 'react'

function Form({children}) {
  return (
    <form>
    
    {children}
    
    </form>
  )
}
Form.Group=Group;
Form.Label=Label;

function Group({children}) {
  return (
    <div style={{background:"red",margin:"1rem"}}>
    
    {children}
    
    </div>
  )
}
function Label({children}) {
  return (
    <label style={{background:"pink",margin:"1rem"}}>
    
    {children}
    
    </label>
  )
}
export default Form