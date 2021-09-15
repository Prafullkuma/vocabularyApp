import axios from 'axios'
export const ALL_WORDS="ALL_WORDS"
export const ADD_WORD="ADD_WORD"

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

export const AddWordAction=(word_id,successMessage)=>{
      
    
    return(dispatch)=>{
        axios.get(`http://localhost:8000/api/oxferd/addWord?word_id=${word_id}`)
        .then((res)=>{
            const result=res.data
              if(!result.error){
                 dispatch({type:ADD_WORD,payload:result})
                 successMessage()
              }
        })
        .catch((err)=>{
            alert("there is must be error on server")
        })
    }

}