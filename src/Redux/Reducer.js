import { DECREMENT, HANDLESHOW, HNADLEEDIT, INCREMENT } from "./ActionTypes"

const initialState = {
    count : 0,
    textI : '',
    show : false
  
 }

 const Reducer=(state = initialState, action)=>{
    switch (action.type) {
        case INCREMENT :  return {...state,count : state.count + action.payload}
        case DECREMENT : return {...state, count : state.count >0 ? state.count -1 : 0}
        case HNADLEEDIT : return {...state, textI : action.payload}
        case HANDLESHOW : return {...state, show : !state.show}
        default: return state
    }
 }

 export default Reducer 