import { useSelector,useDispatch } from "react-redux"
import { decrement, handleEdit, increment } from "../Redux/Actions"

const Counter=()=>{
    const count = useSelector(state=>state.count)
    const dispatch = useDispatch()
    const textI = useSelector(state => state.textI)


    return(
        <div>
            <h2>Counter Component</h2>
            <button onClick={()=>dispatch(decrement())}>-</button>
            <span>{count}</span>
            <button onClick={()=>dispatch(increment(5))}>+</button>
            <input type='text' onChange={(e)=> dispatch(handleEdit(e.target.value))}/>
            <h2>{textI}</h2>
      
        </div>
    )
}

export default Counter