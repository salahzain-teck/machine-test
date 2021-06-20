import React from 'react'
import CallMadeIcon from '@material-ui/icons/CallMade';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import './Contacts.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState } from 'react';
import ChartDropDown from '../components/ChartDropDown';





function Contacts() {
    const [state, setState] = useState(false)
    const data= [   
        {fullname:'angela', name:'teck', address:'EF 12' },
        {fullname:'angela', name:'teck', address:'EF 12' },
        {fullname:'angela', name:'teck', address:'EF 12' },
        {fullname:'angela', name:'teck', address:'EF 12' },
        {fullname:'angela', name:'teck', address:'EF 12' },
        {fullname:'angela', name:'teck', address:'EF 12' },
      
    ]

    const data1 = [
        {fullname:'angela', name:'teck', address:'EF 12' },
        {fullname:'angela', name:'teck', address:'EF 12' },
        {fullname:'angela', name:'teck', address:'EF 12' },
        {fullname:'angela', name:'teck', address:'EF 12' },
        {fullname:'angela', name:'teck', address:'EF 12' },
        {fullname:'angela', name:'teck', address:'EF 12' },
        {fullname:'angela', name:'teck', address:'EF 12' },
        {fullname:'angela', name:'teck', address:'EF 12' },
        {fullname:'angela', name:'teck', address:'EF 12' },
        {fullname:'angela', name:'teck', address:'EF 12' },
        {fullname:'angela', name:'teck', address:'EF 12' },
        {fullname:'angela', name:'teck', address:'EF 12' },
    ]
        
    const [datas, setData] = useState(data)
    const [delet , setDelete] = useState(false)
    return (   
        <>
        {!delet &&
        <div className='salesPlan'>
        <div className='funnel_header'>
            <p>LONDON CONTACTS</p>
            <div className='icons'>
             <CallMadeIcon/>
             < DeleteSharpIcon onClick={()=> setDelete(true)} />
             < ArrowDropDownIcon onClick={()=> setState(!state)} />
            </div>
         </div> 
         <hr/>  
         <div className='contact_content'>
         {state && <ChartDropDown/>}
          <div className='contacts_header'>
           <h6>FullName</h6>
           <h6>Name</h6>
           <h6>AdressPostcode/Zip</h6>
          </div>
           <div className='contact_items'>

             {datas.map((data)=>{

                 return(
                   <div>
                   
                    <Row>
                     
                    <Col xs={4}  md={4} >
                     {data.fullname}
                    </Col>
                    <Col xs={4} md={4}>
                     {data.name}
                    </Col>
                    <Col xs={4} md={4}>
                     {data.address}
                    </Col>
                  </Row>
                       
                   </div>
                    
                 );  
                    
                   
             }) }


   
           </div>
         </div>
         <div className='more_button'>
         <button onClick={()=>setData(data1)}>Show 32 more</button>
         </div>
        
         
     </div>
        }
        </>
    )
}

export default Contacts
