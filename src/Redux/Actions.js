import { DECREMENT, HANDLESHOW, HNADLEEDIT, INCREMENT } from "./ActionTypes"

export const increment=(payload)=>{
    return(
        {
            type : INCREMENT,
            payload 
        }
    )
}

export const decrement=()=>{
    return(
        {
            type : DECREMENT
        }
    )
}

export const handleEdit=(payload)=>{
    return(
        {
            type : HNADLEEDIT,
            payload
        }
    )
}

export const handleShow=()=>{
    return(
        {
            type : HANDLESHOW
        }
    )
}