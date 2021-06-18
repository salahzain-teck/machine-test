import React from 'react'
import CallMadeIcon from '@material-ui/icons/CallMade';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import Button from 'react-bootstrap/Button';
import './TodoList.css'
function Todolist() {
    return (
        <div className='todoList'>
            <div className='main_div'>
            <div className='todo_header'>
            <p>TO DO LIST</p>
               <div className='icons'>
                <CallMadeIcon />
                < DeleteSharpIcon/>
               </div>
            </div>
            <hr/>
            <div className='todo_content'>
             <div className='list'>
                 <div className='list_item'>
                  <div className='item-left'>
                  <input type="checkbox"/>
                 <h5>Update Google Ads Campaign</h5>
                      </div>   
                 
                 <span>
                 < DeleteSharpIcon/>
                 </span>
                 </div>
          
                 <div className='list_item'>
                  <div className='item-left'>
                  <input checked="checked" type="checkbox"/>
                 <h5><s>Book tabel for lunch</s></h5>
                      </div>   
                 
                 <span>
                 < DeleteSharpIcon/>
                 </span>
                 </div>
                 <div className='list_item'>
                  <div className='item-left'>
                  <input type="checkbox"/>
                 <h5>Update Google Ads Campaign</h5>
                      </div>   
                 
                 <span>
                 < DeleteSharpIcon/>
                 </span>
                 </div>
                 <div className='list_item'>
                  <div className='item-left'>
                  <input type="checkbox"/>
                 <h5>Update Google Ads Campaign</h5>
                      </div>   
                 
                 <span>
                 < DeleteSharpIcon />
                 </span>
                 </div>
             </div>

             <input id='input_div' type='text' placeholder='New to do...'/>
            </div>
            </div>
            <div className='button_div'>
            <Button className='buton' bg-primary >CLEAR COMPLETED</Button>
            </div>
         
        </div>
    )
}

export default Todolist
