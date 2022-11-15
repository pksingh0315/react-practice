import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { todoAction } from '../store/index'

const AddTodo = () => {
    const [task,setTask]=useState('')
    const [noData,setNoData]=useState(false)
    const dispatch=useDispatch()
    

    const addItemHandler=(item)=>{
        if(task===""){setNoData(true);return}
        
         const taskName={task}
         dispatch(todoAction.addItem(taskName))
         setNoData(false)
         setTask('')
         
    }
  return (
    <>  
        {(noData)&& <h3>Please Fill All Data!</h3>}
        <input type='text' onChange={(e)=>setTask(e.target.value)} value={task} />
        <button onClick={addItemHandler}>Add</button>
    </>
  )
}

export default AddTodo