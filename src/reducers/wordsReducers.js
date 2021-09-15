import {ALL_WORDS} from '../Actions/wordsAction'
import { ADD_WORD } from '../Actions/wordsAction'

const initialState=[]

const wordsReducers=(state=initialState,actions)=>{

    switch(actions.type){
         case ALL_WORDS:{
             return actions.payload
         }
         case ADD_WORD:{
            return [actions.payload,...state]
         } 
         default:{
            return  state
         }
     }
}

export default wordsReducers
