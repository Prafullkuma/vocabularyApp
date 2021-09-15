import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getAllWords} from '../Actions/wordsAction'
import ListVocabulary from './ListVocabulary'

const Vocabulary=()=>{
    const [mainWord,setMainWords]=useState([])
    const dispatch=useDispatch() 
    
    useEffect(()=>{
       dispatch(getAllWords())
    },[dispatch])

    const { words }=useSelector((state)=>{
        return state
    })
    
    useEffect(()=>{
         if(typeof words !==undefined){ 
            setMainWords([...words])
         }
         
    },[words])

    return(
         <div>  
             <h1>Words List</h1>
            {mainWord.length===0 ?
                   <p>...loading </p>
                    :<ListVocabulary words={mainWord} />
             }     
         </div>
     )
}
export default Vocabulary