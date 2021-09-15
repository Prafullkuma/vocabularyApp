import React from 'react'
import AddVocabualaryForm from './AddVocabualaryForm'
import {useDispatch} from 'react-redux'

import {AddWordAction} from "../Actions/wordsAction"
import Swal from 'sweetalert2'

const AddVocabulary=({mainWord})=>{
    
    const dispatch=useDispatch()
    
    const checkIfNameAlreadyExists=(word_id)=>{
        const result=mainWord.find((ele)=>{
            return ele.id.toLowerCase()===word_id.toLowerCase()
        })
        return result
    }
    const forSubmission=(formData)=>{
        if(formData.word_id){
            const data= checkIfNameAlreadyExists(formData.word_id)
            if(data===undefined){
                    const successMessage=()=>{
                        Swal.fire({
                            icon: 'success',
                            title: 'Success',
                            text: 'Successfully added',
                        })
                    }
             dispatch(AddWordAction(formData.word_id,successMessage))
            }else{
                const errorMessage=()=>{
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Word is already exists ',
                    })
                }
                errorMessage()     
            }
        } 
                
    }
    return(
        <div>
            <AddVocabualaryForm forSubmission={forSubmission}/>
        </div>
    )
}
export default AddVocabulary