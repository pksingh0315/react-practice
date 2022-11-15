import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { todoAction } from '../store/index'
const TodoList = () => {
    const dispatch=useDispatch()
    const todoItem=useSelector(state=>state.item)
  return (
    <div>{todoItem.map((ele)=>{
        return(
            <div key={ele.id} className='todo'>
                <h3>{ele.task}</h3>
                <button onClick={()=>dispatch(todoAction.deleteItem(ele))}>Delete</button>
                <button onClick={()=>dispatch(todoAction.editItem(ele))}>Edit</button>
            </div>
        )
    })}</div>
  )
}

export default TodoList