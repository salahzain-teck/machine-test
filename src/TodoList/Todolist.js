import React, { useState } from 'react'
import CallMadeIcon from '@material-ui/icons/CallMade';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import Button from 'react-bootstrap/Button';
import './TodoList.css'

import AddIcon from '@material-ui/icons/Add';
function Todolist() {
    const [delet , setDelete] = useState(false)
    const [toDos , setTodos] = useState(['Update Google Ads Campaign',])
    const [toDo, setTodo] = useState('')
    const [cheked, setChecked] = useState(false)

    const removeTodo=(index)=> {
    
        if (index > -1) {
           toDos.splice(index,1);
          }
       
        setTodo('')
    }  
 


    return (

        <>        
        {!delet && 
        <div className='todoList'>
        <div className='main_div'>
        <div className='todo_header'>
        <p>TO DO LIST</p>
           <div className='icons'>
            <CallMadeIcon />
            < DeleteSharpIcon onClick={()=> setDelete(!delet)} />
           </div>
        </div>
        <hr/>


        <div className='todo_content'>
         <div className='list'>

             {toDos.map((data ,index)=>{
                 return(
                    
                  
                      <div className='list_item'>
                      <div className='item-left'> 
                    <input type="checkbox" onClick={()=>setChecked(!cheked)} />
                    {cheked ?  <h5><s>{data}</s></h5>:<h5>{data}</h5> }
                    
      
                   </div>   
       
                      <span>
                < DeleteSharpIcon onClick={()=> removeTodo(index)} />
                 </span>
                    </div>
                    
                  

                 );
            
             })}
           
      


         </div>
          <div className='input_field'>
          <input  value={toDo} onChange={(e)=>setTodo(e.target.value)}
            
         id='input_div' type='text' placeholder='New to do...'/>
          <AddIcon   onClick ={()=>setTodos([...toDos,toDo])}   />
          </div>
        
        </div>
        </div>
        <div className='button_div'>
        <Button className='buton' bg-primary >CLEAR COMPLETED</Button>
        </div>
     
    </div>
        }
        </>
        
    )
}

export default Todolist
