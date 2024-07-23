import React, { useState } from 'react'
import './Home.css'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Addtask from '../Components/Addtask';
import { toast } from 'react-toastify';
import { AddTask } from '../Services/allApi';


function Home() {
  const [addres,setAddres]=useState("")
  const[tasks,setTask]=useState({
    task:""
  })
  //console.log(tasks)
  const addForm=async()=>{
    const {task}=tasks
    if(!task){
      toast.info('enter valid inputs')
    }
    else{
      const result=await AddTask(tasks)
      console.log(result);
      if(result.status===201){
        setAddres(result)
        setTask({task:""})
        toast.success('task added successfully')

      }
      }
    }
   

  return (
    
     <div className='main w-50% '>
        <div className='child m-3 '>
       
        <h3 className='text-center mt-3'> My ToDo</h3>

        <FloatingLabel
        controlId="floatingInput"
        label="Enter Task Name"
        className="m-2 "
        style={{width:'280px'}}
      >
        <Form.Control type="text" onChange={(e)=>{setTask({tasks,task:e.target.value})}} placeholder="Enter Task" />
      </FloatingLabel>
      
      <button className=' m-2 bg-secondary btn text-success' onClick={addForm}  style={{width:'280px'}}>Add</button>
        </div>
        <Addtask  adres={addres} />

     </div>
     

  )
}

export default Home
