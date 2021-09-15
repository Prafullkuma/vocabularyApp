import axios from 'axios'
export const ALL_WORDS="ALL_WORDS"

export const getAllWords=()=>{
    return (dispatch)=>{ 
       axios.get('http://localhost:8000/api/oxferd/getAllWords')
        .then((res)=>{
            const result=res.data
            dispatch({type:ALL_WORDS,payload:result})
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}