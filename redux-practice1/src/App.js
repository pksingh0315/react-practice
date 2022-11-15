
import Button from '@mui/material/Button';
import { incNumber,decNumber } from './redux/action';
import { useSelector,useDispatch } from 'react-redux';
const App=()=>{
  
  const counter =useSelector((state)=>{
    //console.log(state)
    return state.changeNumber
  })

  const dispatch=useDispatch()
 
  return (
  <>
    <h1 style={{margin:'auto', textAlign:"center"}} >{counter}</h1>
    <Button style={{margin:10}} variant="contained" onClick={()=>dispatch(incNumber())}>Add</Button>
    <Button  variant="contained" onClick={()=>dispatch(decNumber())}>Reduce</Button>
  </>
  )
}
export default App